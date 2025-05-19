
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tight hover:text-primary"
            onClick={closeMenu}
          >
            Yoseph<span className="text-primary">.dev</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/blog" className="text-sm font-medium hover:text-primary focus-ring rounded-md">
            Blog
          </Link>
          <Link to="/projects" className="text-sm font-medium hover:text-primary focus-ring rounded-md">
            Projects
          </Link>
          <Link to="/resources" className="text-sm font-medium hover:text-primary focus-ring rounded-md">
            Resources
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary focus-ring rounded-md">
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm" 
            className="focus-ring" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 bg-background border-t",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-lg font-medium hover:text-primary"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/blog" 
            className="text-lg font-medium hover:text-primary"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link 
            to="/projects" 
            className="text-lg font-medium hover:text-primary"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/resources" 
            className="text-lg font-medium hover:text-primary"
            onClick={closeMenu}
          >
            Resources
          </Link>
          <Link 
            to="/contact" 
            className="text-lg font-medium hover:text-primary"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
