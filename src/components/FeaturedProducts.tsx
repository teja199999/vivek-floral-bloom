
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
}

const FeaturedProducts = ({
  title,
  subtitle,
  products,
  viewAllLink,
}: FeaturedProductsProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-floral-green-dark mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 max-w-2xl">{subtitle}</p>
            )}
          </div>
          
          {viewAllLink && (
            <Link
              to={viewAllLink}
              className="hidden md:flex items-center text-floral-green-dark hover:text-floral-green group"
            >
              View All
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {viewAllLink && (
          <div className="mt-8 text-center md:hidden">
            <Link
              to={viewAllLink}
              className="inline-flex items-center text-floral-green-dark hover:text-floral-green"
            >
              View All Products
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
