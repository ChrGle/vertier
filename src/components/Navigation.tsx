import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import vertierLogo from "@/assets/vertier-logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={vertierLogo} alt="Vertier" className="h-8" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/") ? "text-accent" : "text-foreground"
              }`}
            >
              Hem
            </Link>
            <Link 
              to="/plattform" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/plattform") ? "text-accent" : "text-foreground"
              }`}
            >
              Plattformen
            </Link>
            <Link 
              to="/om-oss" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/om-oss") ? "text-accent" : "text-foreground"
              }`}
            >
              Om oss
            </Link>
            <Button asChild variant="default">
              <Link to="/kontakt">Kontakta oss</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
