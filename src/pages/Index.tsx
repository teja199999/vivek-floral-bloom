
import React from "react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import TestimonialSection from "@/components/TestimonialSection";
import InfoBanner from "@/components/InfoBanner";
import CTASection from "@/components/CTASection";

const Index = () => {
  // Get best sellers
  const bestSellers = products.filter(product => product.bestSeller);
  
  // Get new arrivals
  const newArrivals = products.filter(product => product.new);
  
  // Get discounted products
  const onSale = products.filter(product => product.discountedPrice);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroBanner />
        <InfoBanner />
        <FeaturedProducts 
          title="Best Selling Bouquets" 
          subtitle="Our most popular arrangements, loved by customers across India."
          products={bestSellers}
          viewAllLink="/shop"
        />
        <CategorySection />
        <FeaturedProducts 
          title="New Arrivals" 
          subtitle="Fresh and seasonal blooms, newly added to our collection."
          products={newArrivals}
          viewAllLink="/shop/new-arrivals"
        />
        <TestimonialSection />
        <FeaturedProducts 
          title="Special Offers" 
          subtitle="Beautiful flowers at special prices for a limited time."
          products={onSale}
          viewAllLink="/shop/offers"
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
