
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-floral-cream text-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-floral-green-dark mb-4">
              VivekFlowers
            </h3>
            <p className="mb-4 text-gray-600">
              Bringing beauty and joy to your special moments with our handcrafted 
              flower arrangements, delivered with love across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-floral-green-dark" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-floral-green-dark" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-floral-green-dark" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-floral-green-dark">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/occasions" className="text-gray-600 hover:text-floral-green-dark">
                  Shop by Occasion
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-floral-green-dark">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-floral-green-dark">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-floral-green-dark">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-serif font-medium text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="text-gray-600 hover:text-floral-green-dark">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-600 hover:text-floral-green-dark">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-floral-green-dark">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-floral-green-dark">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-floral-green-dark">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-serif font-medium text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-floral-green-dark flex-shrink-0" />
                <span className="text-gray-600">
                  123 Flower Lane, Garden District, Bangalore, 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-floral-green-dark flex-shrink-0" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-floral-green-dark flex-shrink-0" />
                <span className="text-gray-600">hello@vivekflowers.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} VivekFlowers. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-floral-green-dark">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-floral-green-dark">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-500 hover:text-floral-green-dark">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
