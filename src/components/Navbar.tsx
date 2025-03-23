
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/Logo.png" 
              alt="Ambach Masonry" 
              className="h-14"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 font-medium rounded-md transition-colors hover:text-masonry-brick ${
                  isActive(link.path)
                    ? "text-masonry-brick"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="ml-4 bg-masonry-brick hover:bg-masonry-brick/90">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 font-medium rounded-md ${
                    isActive(link.path)
                      ? "bg-masonry-brick/10 text-masonry-brick"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-masonry-brick hover:bg-masonry-brick/90">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
