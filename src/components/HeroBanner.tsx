
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="relative bg-floral-pink-light overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558296578-036bc9e4c04b?q=80&w=2000&auto=format&fit=crop"
          alt="Flower banner background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-xl md:ml-12">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-floral-green-dark leading-tight">
            Beautiful Flowers <br className="hidden md:block" />
            For Every Occasion
          </h1>
          
          <p className="text-lg mb-8 text-gray-700">
            Send fresh, handcrafted bouquets for birthdays, anniversaries, or just because.
            Same-day delivery available.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-floral-green-dark hover:bg-floral-green text-white px-6 py-6"
              size="lg"
              asChild
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
            
            <Button
              variant="outline"
              className="border-floral-green-dark text-floral-green-dark hover:bg-floral-green-dark hover:text-white"
              size="lg"
              asChild
            >
              <Link to="/occasions">Shop by Occasion</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
