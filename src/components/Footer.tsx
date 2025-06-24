import { Link } from "react-router-dom";
import { NewsletterSubscribe } from "@/components/NewsletterSubscribe";

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
                  href="https://linkedin.com/in/yoseph-berhane"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yosephdev"
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
            <div className="mt-2">
              <NewsletterSubscribe compact />
            </div>
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
