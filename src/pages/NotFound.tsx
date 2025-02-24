import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center">
      <div className="text-center space-y-6 animate-slideUp">
        <h1 className="text-4xl font-semibold tracking-tight">404</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button variant="default" size="lg" asChild>
          <a href="/" className="inline-flex items-center gap-2">
            <Home size={18} />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
