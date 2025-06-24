# Git Workflow Templates & Best Practices 🚀

A comprehensive guide to Git workflows, branching strategies, and best practices for individual developers and teams.

## Table of Contents

- [Quick Reference](#quick-reference)
- [GitHub Flow](#github-flow)
- [GitFlow](#gitflow)
- [Feature Branch Workflow](#feature-branch-workflow)
- [Forking Workflow](#forking-workflow)
- [Release Flow](#release-flow)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Common Git Commands](#common-git-commands)
- [Troubleshooting](#troubleshooting)

## Quick Reference

### Essential Commands

```bash
# Clone repository
git clone <repository-url>

# Check status
git status

# Add changes
git add .                    # Add all changes
git add <file>              # Add specific file

# Commit changes
git commit -m "Your message"

# Push changes
git push origin <branch-name>

# Pull latest changes
git pull origin <branch-name>

# Create and switch to new branch
git checkout -b <branch-name>

# Switch branches
git checkout <branch-name>
```

## GitHub Flow

**Best for:** Small teams, continuous deployment, simple projects

### Workflow Steps

1. **Create a branch** from `main`
2. **Make changes** and commit locally
3. **Push branch** to origin
4. **Open a Pull Request**
5. **Review and discuss** changes
6. **Merge** after approval
7. **Deploy** from `main`
8. **Delete** feature branch

### Commands

```bash
# 1. Start from main and pull latest
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/user-authentication

# 3. Make changes and commit
git add .
git commit -m "Add user login functionality"

# 4. Push to remote
git push origin feature/user-authentication

# 5. Create Pull Request on GitHub
# (Done through GitHub UI)

# 6. After merge, cleanup
git checkout main
git pull origin main
git branch -d feature/user-authentication
```

### Pros & Cons

✅ **Pros:**

- Simple and easy to understand
- Fast deployment cycle
- Good for continuous integration

❌ **Cons:**

- Less suitable for scheduled releases
- Can be chaotic with large teams

---

## GitFlow

**Best for:** Scheduled releases, larger teams, complex projects

### Branch Structure

- **`main`** - Production-ready code
- **`develop`** - Integration branch for features
- **`feature/*`** - New features
- **`release/*`** - Release preparation
- **`hotfix/*`** - Critical production fixes

### Workflow Commands

#### Feature Development

```bash
# Start feature from develop
git checkout develop
git pull origin develop
git checkout -b feature/shopping-cart

# Work on feature
git add .
git commit -m "Add shopping cart functionality"
git push origin feature/shopping-cart

# Merge back to develop (via PR)
git checkout develop
git pull origin develop
git merge feature/shopping-cart
git push origin develop
git branch -d feature/shopping-cart
```

#### Release Process

```bash
# Create release branch
git checkout develop
git pull origin develop
git checkout -b release/v1.2.0

# Finalize release (bug fixes, version bumps)
git add .
git commit -m "Bump version to 1.2.0"

# Merge to main
git checkout main
git pull origin main
git merge release/v1.2.0
git tag -a v1.2.0 -m "Release version 1.2.0"
git push origin main --tags

# Merge back to develop
git checkout develop
git merge release/v1.2.0
git push origin develop

# Cleanup
git branch -d release/v1.2.0
```

#### Hotfix Process

```bash
# Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-security-fix

# Fix the issue
git add .
git commit -m "Fix critical security vulnerability"

# Merge to main
git checkout main
git merge hotfix/critical-security-fix
git tag -a v1.2.1 -m "Hotfix version 1.2.1"
git push origin main --tags

# Merge to develop
git checkout develop
git merge hotfix/critical-security-fix
git push origin develop

# Cleanup
git branch -d hotfix/critical-security-fix
```

### Pros & Cons

✅ **Pros:**

- Clear separation of concerns
- Supports parallel development
- Good for scheduled releases

❌ **Cons:**

- More complex
- Slower deployment cycle

---

## Feature Branch Workflow

**Best for:** Medium teams, regular releases

### Workflow

```bash
# 1. Create feature branch
git checkout main
git pull origin main
git checkout -b feature/payment-integration

# 2. Develop feature
git add .
git commit -m "Add payment gateway integration"
git push origin feature/payment-integration

# 3. Create Pull Request and merge
# 4. Cleanup
git checkout main
git pull origin main
git branch -d feature/payment-integration
```

---

## Forking Workflow

**Best for:** Open source projects, external contributors

### Workflow

```bash
# 1. Fork repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/PROJECT-NAME.git

# 3. Add upstream remote
git remote add upstream https://github.com/ORIGINAL-OWNER/PROJECT-NAME.git

# 4. Create feature branch
git checkout -b feature/new-feature

# 5. Make changes and push to your fork
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# 6. Create Pull Request from your fork to original repo

# 7. Keep your fork updated
git checkout main
git pull upstream main
git push origin main
```

---

## Release Flow

**Best for:** Products with regular release cycles

### Workflow

```bash
# Create release branch
git checkout main
git pull origin main
git checkout -b release/2023.12

# Merge features into release branch
git merge feature/feature-1
git merge feature/feature-2

# Test and fix bugs in release branch
git add .
git commit -m "Fix release bugs"

# Deploy to staging for testing
# After approval, merge to main
git checkout main
git merge release/2023.12
git tag -a v2023.12.0 -m "Release December 2023"
git push origin main --tags

# Cleanup
git branch -d release/2023.12
```

---

## Commit Message Guidelines

### Conventional Commits Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Code style changes (formatting, etc.)
- **refactor:** Code refactoring
- **test:** Adding or updating tests
- **chore:** Maintenance tasks

### Examples

```bash
# Good commit messages
git commit -m "feat: add user authentication system"
git commit -m "fix: resolve login redirect issue"
git commit -m "docs: update API documentation"
git commit -m "refactor: optimize database queries"

# With scope
git commit -m "feat(auth): add OAuth2 integration"
git commit -m "fix(ui): correct button alignment on mobile"
```

### Multi-line Commits

```bash
git commit -m "feat: add user profile management

- Add profile editing functionality
- Implement avatar upload
- Add profile validation
- Update user settings page

Closes #123"
```

---

## Branch Naming Conventions

### Recommended Patterns

```bash
# Features
feature/user-authentication
feature/payment-integration
feature/dashboard-redesign

# Bug fixes
fix/login-redirect-issue
fix/memory-leak-in-parser
bugfix/header-alignment

# Hotfixes
hotfix/security-vulnerability
hotfix/critical-payment-bug

# Releases
release/v1.2.0
release/2023.12

# Experiments
experiment/new-ui-framework
spike/performance-optimization

# Documentation
docs/api-documentation
docs/setup-guide
```

### Branch Naming Rules

- Use lowercase letters
- Use hyphens to separate words
- Be descriptive but concise
- Include ticket/issue numbers when applicable
- Avoid special characters

---

## Common Git Commands

### Branch Management

```bash
# List branches
git branch                  # Local branches
git branch -r              # Remote branches
git branch -a              # All branches

# Create branch
git branch <branch-name>
git checkout -b <branch-name>  # Create and switch

# Switch branches
git checkout <branch-name>
git switch <branch-name>    # Git 2.23+

# Delete branches
git branch -d <branch-name>     # Safe delete
git branch -D <branch-name>     # Force delete
git push origin --delete <branch-name>  # Delete remote
```

### Stashing Changes

```bash
# Stash current changes
git stash
git stash push -m "Work in progress on feature X"

# List stashes
git stash list

# Apply stash
git stash apply
git stash apply stash@{2}

# Pop stash (apply and remove)
git stash pop

# Drop stash
git stash drop stash@{1}
```

### Viewing History

```bash
# View commit history
git log
git log --oneline
git log --graph --oneline --all

# View changes
git diff                    # Unstaged changes
git diff --staged          # Staged changes
git diff HEAD~1            # Compare with previous commit

# Show specific commit
git show <commit-hash>
```

### Undoing Changes

```bash
# Unstage files
git reset HEAD <file>
git restore --staged <file>  # Git 2.23+

# Discard changes
git checkout -- <file>
git restore <file>          # Git 2.23+

# Reset to previous commit
git reset --soft HEAD~1     # Keep changes staged
git reset --mixed HEAD~1    # Keep changes unstaged
git reset --hard HEAD~1     # Discard all changes

# Revert commit (safe for shared branches)
git revert <commit-hash>
```

### Remote Operations

```bash
# Add remote
git remote add origin <url>

# View remotes
git remote -v

# Fetch changes
git fetch origin
git fetch --all

# Pull changes
git pull origin <branch>
git pull --rebase origin <branch>

# Push changes
git push origin <branch>
git push -u origin <branch>  # Set upstream
git push --force-with-lease  # Safe force push
```

---

## Troubleshooting

### Common Issues & Solutions

#### Merge Conflicts

```bash
# When merge conflict occurs
git status                  # See conflicted files
# Edit files to resolve conflicts
git add <resolved-files>
git commit -m "Resolve merge conflicts"
```

#### Accidentally Committed to Wrong Branch

```bash
# Move commits to correct branch
git log --oneline          # Find commit hash
git checkout correct-branch
git cherry-pick <commit-hash>
git checkout wrong-branch
git reset --hard HEAD~1    # Remove from wrong branch
```

#### Forgot to Create Feature Branch

```bash
# Create branch from current state
git checkout -b feature/my-feature
# Your changes are now on the feature branch
```

#### Need to Update Feature Branch with Latest Main

```bash
# Option 1: Merge (creates merge commit)
git checkout feature/my-feature
git merge main

# Option 2: Rebase (cleaner history)
git checkout feature/my-feature
git rebase main
```

#### Accidentally Pushed Sensitive Information

```bash
# Remove file from history (use with caution)
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch <sensitive-file>' \
--prune-empty --tag-name-filter cat -- --all

# Force push (dangerous - coordinate with team)
git push --force-with-lease --all
```

### Git Configuration Tips

```bash
# Set up user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Useful aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'

# Better diff tool
git config --global diff.tool vimdiff

# Auto-correct typos
git config --global help.autocorrect 1

# Colorful output
git config --global color.ui auto
```

---

## Best Practices Summary

### Do's ✅

- Write clear, descriptive commit messages
- Use consistent branch naming conventions
- Keep commits small and focused
- Test before committing
- Pull before pushing
- Use Pull Requests for code review
- Delete merged branches
- Use `.gitignore` appropriately

### Don'ts ❌

- Don't commit directly to main/master
- Don't force push to shared branches
- Don't commit sensitive information
- Don't make huge commits
- Don't ignore merge conflicts
- Don't work on multiple features in one branch
- Don't forget to pull latest changes

### Team Collaboration

- Establish workflow early in the project
- Document your chosen workflow
- Use consistent commit message format
- Set up branch protection rules
- Require code reviews
- Use continuous integration
- Communicate about major changes

---

## Workflow Decision Matrix

| Project Type | Team Size | Release Cycle | Recommended Workflow |
|--------------|-----------|---------------|---------------------|
| Personal/Small | 1-2 | Continuous | GitHub Flow |
| Startup | 3-5 | Weekly | Feature Branch |
| Enterprise | 5+ | Monthly | GitFlow |
| Open Source | Any | Varies | Forking Workflow |
| Product | 5+ | Scheduled | Release Flow |

---

## Additional Resources

- [Pro Git Book](https://git-scm.com/book)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [GitFlow Original Article](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

*This guide is designed to help developers choose and implement the right Git workflow for their projects. Remember, the best workflow is the one your team consistently follows!*
