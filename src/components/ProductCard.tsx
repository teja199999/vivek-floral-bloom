
import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.bestSeller && (
          <Badge className="bg-amber-500 hover:bg-amber-600">Best Seller</Badge>
        )}
        {product.new && (
          <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
        )}
        {product.discountedPrice && (
          <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
        )}
      </div>
      
      {/* Wishlist button */}
      <button className="absolute top-2 right-2 z-10 p-1 rounded-full bg-white/80 hover:bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Heart size={18} className="text-gray-600 hover:text-red-500 transition-colors" />
      </button>
      
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      
      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-serif text-lg font-medium mb-1 hover:text-floral-green-dark transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center mb-3">
          {product.discountedPrice ? (
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 line-through text-sm">
                {formatPrice(product.price)}
              </span>
              <span className="font-semibold text-floral-green-dark">
                {formatPrice(product.discountedPrice)}
              </span>
            </div>
          ) : (
            <span className="font-semibold text-floral-green-dark">
              {formatPrice(product.price)}
            </span>
          )}
          
          <div className="text-sm text-gray-500">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-floral-green"
            asChild
          >
            <Link to={`/product/${product.id}`}>View Details</Link>
          </Button>
          
          <Button
            size="sm"
            className="bg-floral-green-dark hover:bg-floral-green"
            onClick={() => addItem(product)}
          >
            <ShoppingCart size={16} className="mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
