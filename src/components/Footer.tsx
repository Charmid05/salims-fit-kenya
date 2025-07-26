import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Membership Plans", path: "/membership" },
    { name: "Book Appointment", path: "/book" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Personal Training",
    "Group Classes",
    "Nutritional Guidance",
    "Fitness Assessment",
    "Strength Training",
    "Cardio Workouts",
  ];

  return (
    <footer className="bg-gym-black text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-red py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Fitness Tips</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get exclusive workout routines, nutrition tips, and special offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gym-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="default" className="bg-white text-primary hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-red rounded-lg p-2">
                  <span className="text-white font-bold text-xl">SF</span>
                </div>
                <span className="text-2xl font-bold">Salims' Fitness</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Kenya's premier fitness destination where transformation begins. 
                Join our community and discover your strongest self.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div>+254 769943055</div>
                    <div>+254 104979415</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Salimkhamis375@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-400">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours & Social */}
            <div>
              <h4 className="text-xl font-bold mb-6">Opening Hours</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-white">Mon - Fri: 5:00 AM - 11:00 PM</div>
                    <div className="text-gray-400">Weekends: 6:00 AM - 10:00 PM</div>
                  </div>
                </div>
              </div>

              <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-primary transition-colors cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-primary transition-colors cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-primary transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Salims' Fitness. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;