
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-masonry-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/Logo.png" 
              alt="Ambach Masonry" 
              className="h-16 mb-4 bg-white p-2 rounded"
            />
            <p className="text-gray-300 mb-4">
              Ambach Masonry Construction, Inc. specializes in premier masonry construction
              for commercial and institutional projects across Florida.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-masonry-brick transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-masonry-brick transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-masonry-brick transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-masonry-brick pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-masonry-brick pb-2">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Institutional Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Brick & Stone Masonry
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Concrete Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Specialty Masonry
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-masonry-brick pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-masonry-brick mt-0.5" />
                <span className="text-gray-300">
                  123 Mason Way,<br />
                  Jacksonville, FL 32256
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-masonry-brick" />
                <a href="tel:9041234567" className="text-gray-300 hover:text-white transition-colors">
                  (904) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-masonry-brick" />
                <a href="mailto:info@ambachmasonry.com" className="text-gray-300 hover:text-white transition-colors">
                  info@ambachmasonry.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-masonry-brick mt-0.5" />
                <span className="text-gray-300">
                  Mon-Fri: 7:00 AM - 5:00 PM<br />
                  Sat: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ambach Masonry Construction, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
