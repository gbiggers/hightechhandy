import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          Greg, Tech Handyman
        </Link>
        
        <div className="flex items-center gap-4">
          <a 
            href="tel:8053160088" 
            className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-semibold">(805) 316-0088</span>
          </a>
          
          {isHome ? (
            <Link to="/request-help">
              <Button variant="default">I need help</Button>
            </Link>
          ) : (
            <Link to="/">
              <Button variant="outline">Home</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
