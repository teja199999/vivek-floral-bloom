
import React from "react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-floral-green-dark mb-6">
          Our Collection
        </h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Explore our handcrafted floral arrangements, perfect for any occasion. Each bouquet is created with the freshest flowers by our expert florists.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
