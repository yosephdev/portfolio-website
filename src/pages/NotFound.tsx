
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-20">
          <div className="mx-auto max-w-[500px] text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Oops! The page you're looking for doesn't exist.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
