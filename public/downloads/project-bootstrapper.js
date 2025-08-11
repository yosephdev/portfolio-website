#!/usr/bin/env node
/**
 * project-bootstrapper.js
 *
 * Simple, self-contained Node.js script to scaffold a small starter project
 * based on user choices. Uses inquirer for prompts. Does NOT install
 * dependencies — it only generates files and folders.
 *
 * Usage:
 *   1. Save this file as project-bootstrapper.js
 *   2. Run `npm install inquirer` in the same folder (or globally)
 *   3. Run `node project-bootstrapper.js` and follow prompts
 *
 * Author: Yoseph Berhane Gebremedhin (for yoseph.dev)
 * Date: 2025
 */

const fs = require('fs').promises;
const path = require('path');
const inquirer = require('inquirer');

// ---------- Utility helpers ----------

/**
 * Safely create a directory (recursive). If it exists, nothing happens.
 * @param {string} dirPath
 */
async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

/**
 * Write a file and create parent directories if necessary.
 * @param {string} filePath
 * @param {string} content
 */
async function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  await ensureDir(dir);
  await fs.writeFile(filePath, content, 'utf8');
}

/**
 * Simple JSON stringify with 2-space indentation.
 * @param {object} obj
 */
function prettyJSON(obj) {
  return JSON.stringify(obj, null, 2) + '\n';
}

/**
 * Make a safe package name from project name by lowercasing and replacing spaces.
 * @param {string} name
 */
function pkgNameFrom(name) {
  return name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-_.]/g, '');
}

// ---------- Templates (string factories) ----------

/**
 * Generate package.json content based on choices.
 * Adds dependencies as strings (not installed).
 */
function generatePackageJson({ projectName, description, language, framework, cssPreprocessor }) {
  const name = pkgNameFrom(projectName || 'my-project');
  const isTypeScript = language === 'TypeScript';

  // Minimal set of dependencies strings (informational)
  const dependencies = {};
  const devDependencies = {};

  // Add framework-specific notes/dep placeholders
  if (framework === 'React') {
    // We'll suggest react + react-dom (user will install later)
    dependencies['react'] = '^18.0.0';
    dependencies['react-dom'] = '^18.0.0';
    if (isTypeScript) devDependencies['@types/react'] = '^18.0.0', devDependencies['@types/react-dom'] = '^18.0.0';
  } else if (framework === 'Vue') {
    dependencies['vue'] = '^3.0.0';
    if (isTypeScript) devDependencies['@vue/runtime-dom'] = '^3.0.0';
  } else if (framework === 'Svelte') {
    dependencies['svelte'] = '^4.0.0';
  }

  // CSS preprocessor hints
  if (cssPreprocessor === 'Sass') {
    devDependencies['sass'] = '^1.0.0';
  } else if (cssPreprocessor === 'Less') {
    devDependencies['less'] = '^4.0.0';
  }

  // Basic scripts: user can replace with proper scripts for Vite/CRA/etc.
  const scripts = {
    start: "echo \"No start script configured — install deps and update package.json scripts.\"",
    build: "echo \"No build script configured — configure this to suit your toolchain (Vite/Rollup/etc).\""
  };

  const pkg = {
    name,
    version: "0.1.0",
    description: description || "",
    main: isTypeScript ? "dist/index.js" : "src/index.js",
    scripts,
    keywords: [],
    author: "",
    license: "MIT",
    dependencies,
    devDependencies
  };

  return prettyJSON(pkg);
}

/**
 * index HTML for public folder
 */
function indexHtmlTemplate(title = 'My App') {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${title}</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- The script tag below is a placeholder. Use your bundler (Vite/Rollup/webpack) to build and inject the bundle. -->
    <script src="/src/main.js" type="module"></script>
  </body>
</html>
`;
}

/**
 * React starter (JSX or TSX)
 */
function reactMainTemplate(isTS) {
  const ext = isTS ? 'tsx' : 'jsx';
  return `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.${ext}';
import './styles.${isTS ? 'scss' : 'css'}';

const root = createRoot(document.getElementById('app'));
root.render(<App />);`;
}

function reactAppTemplate(isTS) {
  const ext = isTS ? 'tsx' : 'jsx';
  const props = isTS ? '(): JSX.Element' : '';
  return `import React ${isTS ? '' : ', { useState }'} from 'react';

function App${props} {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Hello from React ${isTS ? '(TypeScript)' : '(JavaScript)'}</h1>
      <p>Edit <code>src/App.${ext}</code> and start building.</p>
    </main>
  );
}

export default App;`;
}

/**
 * Vue starter (Single File Component)
 */
function vueMainTemplate(isTS) {
  return `import { createApp } from 'vue';
import App from './App.vue';
import './styles.css';

createApp(App).mount('#app');`;
}

function vueAppTemplate() {
  return `<template>
  <main style="padding: 2rem; font-family: system-ui, sans-serif;">
    <h1>Hello from Vue 3</h1>
    <p>Edit <code>src/App.vue</code> and start building.</p>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* local styles */
</style>
`;
}

/**
 * Svelte starter
 */
function svelteMainTemplate() {
  return `import App from './App.svelte';
const app = new App({ target: document.getElementById('app') });
export default app;`;
}
function svelteAppTemplate() {
  return `<script>
  let name = "world";
</script>

<main style="padding: 2rem; font-family: system-ui, sans-serif;">
  <h1>Hello from Svelte</h1>
  <p>Welcome, {name} — edit <code>src/App.svelte</code> to get started.</p>
</main>

<style>
  main { max-width: 40rem; margin: 0 auto; }
</style>
`;
}

/**
 * Basic index for plain JS/TS projects (no framework).
 */
function plainIndexTemplate(isTS) {
  return isTS
    ? `export function greet(name: string) {
  return \`Hello, \${name}!\`;
}

console.log(greet('world'));
`
    : `function greet(name) {
  return 'Hello, ' + name + '!';
}

console.log(greet('world'));
`;
}

/**
 * Example styles file content depending on CSS preprocessor.
 */
function stylesTemplate(preprocessor) {
  if (preprocessor === 'Sass') {
    return `// styles.scss
$brand: #0b5cff;

body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #111;
  margin: 0;
  padding: 0;
  background: #fff;
}

h1 { color: $brand; }
`;
  } else if (preprocessor === 'Less') {
    return `// styles.less
@brand: #0b5cff;

body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #111;
  margin: 0;
  padding: 0;
  background: #fff;
}

h1 { color: @brand; }
`;
  } else {
    // plain CSS
    return `/* styles.css */
body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #111;
  margin: 0;
  padding: 0;
  background: #fff;
}

h1 { color: #0b5cff; }
`;
  }
}

/**
 * TSConfig if user chooses TypeScript
 */
function tsconfigTemplate() {
  return `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "jsx": "react-jsx",
    "outDir": "dist"
  },
  "include": ["src"]
}
`;
}

// ---------- Main scaffolding logic ----------

/**
 * Create file structure and write starter files according to choices.
 * @param {object} answers
 */
async function scaffold(answers) {
  const {
    projectName,
    description,
    language,
    framework,
    cssPreprocessor
  } = answers;

  const root = path.resolve(process.cwd(), projectName);
  const isTS = language === 'TypeScript';
  const extJS = isTS ? 'ts' : 'js';
  const reactExt = isTS ? 'tsx' : 'jsx';
  const stylesExt = cssPreprocessor === 'Sass' ? 'scss' : cssPreprocessor === 'Less' ? 'less' : 'css';

  // Create root folder
  await ensureDir(root);

  // public folder
  const publicDir = path.join(root, 'public');
  await ensureDir(publicDir);
  await writeFile(path.join(publicDir, 'index.html'), indexHtmlTemplate(projectName));

  // src, components
  const srcDir = path.join(root, 'src');
  await ensureDir(srcDir);
  await ensureDir(path.join(srcDir, 'components'));

  // Framework-specific scaffolding
  if (framework === 'React') {
    // main entry
    await writeFile(path.join(srcDir, `main.${isTS ? 'ts' : 'js'}`), reactMainTemplate(isTS));
    // App component
    await writeFile(path.join(srcDir, `App.${reactExt}`), reactAppTemplate(isTS));
    // styles
    await writeFile(path.join(srcDir, `styles.${stylesExt}`), stylesTemplate(cssPreprocessor));
  } else if (framework === 'Vue') {
    await writeFile(path.join(srcDir, `main.${extJS}`), vueMainTemplate(isTS));
    await writeFile(path.join(srcDir, `App.vue`), vueAppTemplate());
    await writeFile(path.join(srcDir, `styles.${stylesExt === 'scss' ? 'css' : stylesExt}`), stylesTemplate(cssPreprocessor));
  } else if (framework === 'Svelte') {
    await writeFile(path.join(srcDir, `main.${extJS}`), svelteMainTemplate());
    await writeFile(path.join(srcDir, `App.svelte`), svelteAppTemplate());
    await writeFile(path.join(srcDir, `styles.${stylesExt}`), stylesTemplate(cssPreprocessor));
  } else {
    // Plain project
    await writeFile(path.join(srcDir, `index.${extJS}`), plainIndexTemplate(isTS));
    await writeFile(path.join(srcDir, `styles.${stylesExt}`), stylesTemplate(cssPreprocessor));
  }

  // Add a README
  const readme = `# ${projectName}

${description || 'Project scaffolded with project-bootstrapper.'}

## What was generated

- Minimal ${language} project
- Framework: ${framework}
- CSS preprocessor: ${cssPreprocessor}
- Folder structure: \`public/\`, \`src/\`, \`src/components/\`
- \`package.json\` (dependencies/devDependencies are listed but NOT installed)
- ${isTS ? 'tsconfig.json' : 'No TypeScript config'}

## Next steps

1. \`cd ${projectName}\`
2. Install dependencies (example): \`npm install\` (and add framework-specific deps)
3. Configure your bundler/dev server (Vite/webpack/etc.) or use your favourite starter.

Happy hacking — Yoseph (yoseph.dev)
`;

  await writeFile(path.join(root, 'README.md'), readme);

  // package.json
  const pkgJson = generatePackageJson({ projectName, description, language, framework, cssPreprocessor });
  await writeFile(path.join(root, 'package.json'), pkgJson);

  // tsconfig if needed
  if (isTS) {
    await writeFile(path.join(root, 'tsconfig.json'), tsconfigTemplate());
  }

  // gitignore
  const gitignore = `node_modules
dist
.env
.vscode
.DS_Store
`;
  await writeFile(path.join(root, '.gitignore'), gitignore);

  // Nice note for the user
  return {
    root
  };
}

// ---------- CLI prompt and flow ----------

/**
 * Prompt user for project scaffolding choices via inquirer.
 * Returns answers object.
 */
async function promptUser() {
  const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'Project name:',
      validate(input) {
        if (!input || !input.trim()) return 'Please provide a project name.';
        if (/[\/\\]/.test(input)) return 'Project name must not contain slashes.';
        return true;
      },
      default: 'my-app'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Short description (optional):',
      default: ''
    },
    {
      type: 'list',
      name: 'language',
      message: 'Main Language:',
      choices: ['JavaScript', 'TypeScript'],
      default: 'JavaScript'
    },
    {
      type: 'list',
      name: 'framework',
      message: 'Framework:',
      choices: ['React', 'Vue', 'Svelte', 'None'],
      default: 'React'
    },
    {
      type: 'list',
      name: 'cssPreprocessor',
      message: 'CSS Preprocessor:',
      choices: ['None', 'Sass', 'Less'],
      default: 'None'
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Proceed to generate files with these choices?',
      default: true
    }
  ];

  const answers = await inquirer.prompt(questions);
  if (!answers.confirm) {
    console.log('Aborted by user. No files created.');
    process.exit(0);
  }
  return answers;
}

/**
 * If destination exists and is non-empty, ask confirmation to overwrite.
 * Returns true if OK to proceed.
 */
async function checkExistingDir(projectName) {
  const root = path.resolve(process.cwd(), projectName);
  try {
    const stat = await fs.stat(root);
    if (stat.isDirectory()) {
      const files = await fs.readdir(root);
      if (files.length > 0) {
        const { overwrite } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'overwrite',
            message: `Directory ${projectName} exists and is not empty. Overwrite / merge files? (existing files may be overwritten)`,
            default: false
          }
        ]);
        if (!overwrite) return false;
      }
    } else {
      // Not a directory — refuse
      console.error(`${projectName} exists and is not a directory. Choose another name.`);
      return false;
    }
  } catch (err) {
    // Does not exist — fine
    return true;
  }
  return true;
}

/**
 * Program entrypoint.
 */
async function main() {
  console.log('\nproject-bootstrapper — tiny project scaffolder (yoseph.dev)\n');

  try {
    const answers = await promptUser();

    const ok = await checkExistingDir(answers.projectName);
    if (!ok) {
      console.log('Operation cancelled.');
      process.exit(0);
    }

    console.log(`\nScaffolding project "${answers.projectName}"...`);
    const { root } = await scaffold(answers);
    console.log(`\nDone! Project scaffold created at:\n  ${root}\n`);

    console.log('Next steps (quick):');
    console.log(`  1. cd ${answers.projectName}`);
    console.log('  2. Install dependencies you need, e.g.');
    console.log('     npm install'); // generic
    console.log('  3. Add / adapt build & dev scripts in package.json (Vite/webpack/etc.)');
    console.log('\nTip: This script creates files only — run your bundler or framework starter to run the app.\n');

  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

// Run if invoked directly
if (require.main === module) {
  main();
}

module.exports = {
  scaffold,
  generatePackageJson,
  promptUser
};
