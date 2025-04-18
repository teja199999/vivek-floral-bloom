
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "roses",
    name: "Roses",
    image: "https://images.unsplash.com/photo-1548094972-a065f873a2d4?q=80&w=800&auto=format&fit=crop",
    count: 12,
  },
  {
    id: "mixed",
    name: "Mixed Bouquets",
    image: "https://images.unsplash.com/photo-1515697320591-27fd85ecf07e?q=80&w=800&auto=format&fit=crop",
    count: 18,
  },
  {
    id: "lilies",
    name: "Lilies",
    image: "https://images.unsplash.com/photo-1567696920705-4f918e69a1e3?q=80&w=800&auto=format&fit=crop",
    count: 8,
  },
  {
    id: "orchids",
    name: "Orchids",
    image: "https://images.unsplash.com/photo-1566907387748-7f3ba2fccbfa?q=80&w=800&auto=format&fit=crop",
    count: 6,
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-floral-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-floral-green-dark mb-2">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our wide selection of fresh flowers and arrangements, categorized to help you find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/category/${category.id}`}
              className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5 text-white">
                <h3 className="font-serif text-xl font-medium mb-1 group-hover:translate-y-0 transition-transform">
                  {category.name}
                </h3>
                <p className="text-sm opacity-80">
                  {category.count} products
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
