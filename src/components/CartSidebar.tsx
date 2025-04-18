
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, CartItem } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";

const CartSidebar = () => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="h-full flex flex-col justify-center items-center text-center p-4">
        <ShoppingCart size={48} className="text-gray-300 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
        <p className="text-gray-500 mb-6">
          Looks like you haven't added any flowers to your cart yet.
        </p>
        <Link to="/shop">
          <Button className="bg-floral-green-dark hover:bg-floral-green text-white">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="py-4">
        <h2 className="text-xl font-serif font-semibold">
          Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        {items.map((item) => (
          <CartItemCard
            key={item.product.id}
            item={item}
            onRemove={removeItem}
            onUpdateQuantity={updateQuantity}
          />
        ))}
      </div>

      <div className="border-t pt-4 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Delivery</span>
          <span className="font-medium">
            {formatPrice(totalPrice > 0 ? 499 : 0)}
          </span>
        </div>
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Total</span>
          <span>{formatPrice(totalPrice + (totalPrice > 0 ? 499 : 0))}</span>
        </div>
        <Link to="/checkout" className="block w-full">
          <Button className="w-full bg-floral-green-dark hover:bg-floral-green text-white">
            Checkout
          </Button>
        </Link>
        <Link to="/shop" className="block w-full">
          <Button variant="outline" className="w-full">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

interface CartItemCardProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItemCard = ({
  item,
  onRemove,
  onUpdateQuantity,
}: CartItemCardProps) => {
  const { product, quantity } = item;

  return (
    <div className="flex items-start space-x-3 mb-4 pb-4 border-b">
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">{product.name}</h4>
          <button
            onClick={() => onRemove(product.id)}
            className="text-gray-400 hover:text-red-500"
            aria-label="Remove item"
          >
            <Trash2 size={18} />
          </button>
        </div>

        <div className="mt-1 text-sm text-gray-500">
          {product.discountedPrice ? (
            <div className="flex items-center space-x-2">
              <span className="line-through">{formatPrice(product.price)}</span>
              <span className="font-medium text-green-600">
                {formatPrice(product.discountedPrice)}
              </span>
            </div>
          ) : (
            <span>{formatPrice(product.price)}</span>
          )}
        </div>

        <div className="mt-2 flex items-center space-x-2">
          <button
            onClick={() => onUpdateQuantity(product.id, quantity - 1)}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="text-sm px-2">{quantity}</span>
          <button
            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
