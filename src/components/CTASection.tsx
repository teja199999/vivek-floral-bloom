
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-floral-pink relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1623547389280-995365807559?q=80&w=2000&auto=format&fit=crop"
          alt="Flowers background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-floral-green-dark mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Join our floral family and be the first to hear about new collections, seasonal offers, and exclusive discounts.
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-floral-green-dark"
              />
              <Button className="bg-floral-green-dark hover:bg-floral-green text-white px-6">
                Subscribe
              </Button>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              By subscribing, you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
