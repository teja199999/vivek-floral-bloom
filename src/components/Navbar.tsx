import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-floral-green-dark">
              VivekFlowers
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-floral-green-dark font-medium"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-floral-green-dark font-medium"
            >
              Shop
            </Link>
            <Link
              to="/occasions"
              className="text-gray-700 hover:text-floral-green-dark font-medium"
            >
              Occasions
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-floral-green-dark font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-floral-green-dark font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex text-gray-700 hover:text-floral-green-dark">
              <Search size={20} />
            </button>
            <Link to="/account" className="text-gray-700 hover:text-floral-green-dark">
              <User size={20} />
            </Link>
            
            {/* Cart Icon with Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative text-gray-700 hover:text-floral-green-dark btn-hover">
                  <ShoppingCart size={20} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-floral-green-dark text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <CartSidebar />
              </SheetContent>
            </Sheet>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-5 pb-3 space-y-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-floral-green-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block text-gray-700 hover:text-floral-green-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/occasions"
              className="block text-gray-700 hover:text-floral-green-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Occasions
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-floral-green-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-floral-green-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/account"
              className="block text-gray-700 hover:text-floral-green-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              My Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
