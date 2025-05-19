
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Link to="/" className="text-xl font-bold tracking-tight">
              Yoseph<span className="text-primary">.dev</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Developer, writer, and creator focused on web development, design patterns, and modern tooling.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Content</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to get updates on new content and resources.
            </p>
            <form className="mt-2" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="h-10 rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="h-10 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Yoseph.dev. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
