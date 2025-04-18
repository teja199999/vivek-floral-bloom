
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  images: string[];
  category: string;
  occasions: string[];
  bestSeller: boolean;
  new: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Enchanted Rose Bouquet",
    description: "A stunning arrangement of premium long-stemmed red roses, perfect for expressing love and romance.",
    price: 5999,
    images: [
      "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561181286-d5271b270273?q=80&w=800&auto=format&fit=crop"
    ],
    category: "roses",
    occasions: ["anniversary", "valentine", "romance"],
    bestSeller: true,
    new: false,
    inStock: true
  },
  {
    id: "2",
    name: "Sunny Delight",
    description: "A vibrant mix of sunflowers and yellow roses that brings warmth and happiness to any space.",
    price: 4999,
    images: [
      "https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604323990536-389d2a9a3244?q=80&w=800&auto=format&fit=crop"
    ],
    category: "mixed",
    occasions: ["birthday", "congratulations", "get-well"],
    bestSeller: true,
    new: false,
    inStock: true
  },
  {
    id: "3",
    name: "Serene Whites",
    description: "An elegant arrangement of white lilies, roses, and chrysanthemums, symbolizing purity and peace.",
    price: 6499,
    discountedPrice: 5499,
    images: [
      "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589244159943-460088abcd90?q=80&w=800&auto=format&fit=crop"
    ],
    category: "lilies",
    occasions: ["sympathy", "wedding", "peace"],
    bestSeller: false,
    new: true,
    inStock: true
  },
  {
    id: "4",
    name: "Orchid Dreams",
    description: "Exotic purple orchids arranged in a modern ceramic pot, bringing luxury and sophistication to any setting.",
    price: 7999,
    images: [
      "https://images.unsplash.com/photo-1610664921890-ebad05086414?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566907225278-7312739569d9?q=80&w=800&auto=format&fit=crop"
    ],
    category: "orchids",
    occasions: ["housewarming", "thank-you", "luxury-gift"],
    bestSeller: false,
    new: true,
    inStock: true
  },
  {
    id: "5",
    name: "Spring Meadow",
    description: "A fresh arrangement featuring tulips, daisies and seasonal flowers in pastel colors.",
    price: 4499,
    images: [
      "https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591999089882-1c97143132b3?q=80&w=800&auto=format&fit=crop"
    ],
    category: "mixed",
    occasions: ["birthday", "spring", "mother's-day"],
    bestSeller: false,
    new: false,
    inStock: true
  },
  {
    id: "6",
    name: "Royal Purple Bouquet",
    description: "Luxurious arrangement of purple roses, lilacs, and lisianthus, fit for royalty.",
    price: 6999,
    images: [
      "https://images.unsplash.com/photo-1595536592195-37c58065502f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547913904-b26ada025ed7?q=80&w=800&auto=format&fit=crop"
    ],
    category: "mixed",
    occasions: ["luxury-gift", "congratulations", "anniversary"],
    bestSeller: false,
    new: false,
    inStock: true
  },
  {
    id: "7",
    name: "Garden Bliss",
    description: "A natural arrangement reminiscent of a cottage garden, featuring seasonal blooms and greenery.",
    price: 5499,
    images: [
      "https://images.unsplash.com/photo-1603178455924-ef33350a1509?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?q=80&w=800&auto=format&fit=crop"
    ],
    category: "mixed",
    occasions: ["mother's-day", "birthday", "housewarming"],
    bestSeller: false,
    new: false,
    inStock: true
  },
  {
    id: "8",
    name: "Rustic Charm",
    description: "A delightful mix of wildflowers and garden roses in a rustic wooden box.",
    price: 5999,
    discountedPrice: 4999,
    images: [
      "https://images.unsplash.com/photo-1612546790344-ee4d6749855a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586161513008-9d09d537560b?q=80&w=800&auto=format&fit=crop"
    ],
    category: "mixed",
    occasions: ["birthday", "thank-you", "housewarming"],
    bestSeller: false,
    new: false,
    inStock: true
  }
];

export const categories = [
  { id: "all", name: "All Flowers" },
  { id: "roses", name: "Roses" },
  { id: "lilies", name: "Lilies" },
  { id: "orchids", name: "Orchids" },
  { id: "mixed", name: "Mixed Bouquets" },
];

export const occasions = [
  { id: "all", name: "All Occasions" },
  { id: "birthday", name: "Birthday" },
  { id: "anniversary", name: "Anniversary" },
  { id: "valentine", name: "Valentine's Day" },
  { id: "sympathy", name: "Sympathy & Funeral" },
  { id: "wedding", name: "Wedding" },
  { id: "congratulations", name: "Congratulations" },
  { id: "get-well", name: "Get Well" },
  { id: "thank-you", name: "Thank You" },
  { id: "mother's-day", name: "Mother's Day" },
  { id: "housewarming", name: "Housewarming" },
  { id: "luxury-gift", name: "Luxury Gift" },
];
