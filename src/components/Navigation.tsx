import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Membership Plans", path: "/membership" },
    { name: "Book Now", path: "/book" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-red rounded-lg p-2">
              <span className="text-white font-bold text-xl">SF</span>
            </div>
            <span className="text-2xl font-bold text-gym-black">Salims' Fitness</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <a href="tel:+254769943055" className="hover:text-primary transition-colors">
                +254 769943055
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <a href="https://facebook.com/salimsfinness" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-600 hover:text-primary transition-colors cursor-pointer" />
              </a>
              <a href="https://instagram.com/salimsfinness" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-600 hover:text-primary transition-colors cursor-pointer" />
              </a>
              <a href="https://twitter.com/salimsfinness" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-gray-600 hover:text-primary transition-colors cursor-pointer" />
              </a>
            </div>
            <Link to="/membership">
              <Button variant="hero" size="sm">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-primary bg-red-50"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+254769943055" className="hover:text-primary transition-colors">
                    +254 769943055
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:Salimkhamis375@gmail.com" className="hover:text-primary transition-colors">
                    Salimkhamis375@gmail.com
                  </a>
                </div>
                <Link to="/membership">
                  <Button variant="hero" size="sm" className="w-full">
                    Join Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;