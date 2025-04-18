
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const occasions = [
  {
    id: "birthday",
    title: "Birthday",
    description: "Celebrate another year of life with vibrant, joyful birthday blooms",
    image: "birthday.jpg",
  },
  {
    id: "anniversary",
    title: "Anniversary",
    description: "Mark your special milestone with romantic, elegant arrangements",
    image: "anniversary.jpg",
  },
  {
    id: "wedding",
    title: "Wedding",
    description: "Make your big day unforgettable with stunning floral decor",
    image: "wedding.jpg",
  },
  {
    id: "sympathy",
    title: "Sympathy & Condolence",
    description: "Express your heartfelt condolences with tasteful, comforting flowers",
    image: "sympathy.jpg",
  },
  {
    id: "congratulations",
    title: "Congratulations",
    description: "Celebrate achievements and milestones with bright, cheerful blooms",
    image: "congrats.jpg",
  },
  {
    id: "love",
    title: "Love & Romance",
    description: "Express your feelings with romantic roses and passionate arrangements",
    image: "love.jpg",
  },
  {
    id: "getwell",
    title: "Get Well Soon",
    description: "Send cheerful flowers to brighten someone's day during recovery",
    image: "getwell.jpg",
  },
  {
    id: "housewarming",
    title: "Housewarming",
    description: "Welcome friends to their new home with fresh, inviting flowers",
    image: "housewarming.jpg",
  },
];

const Occasions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-floral-green-dark/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-floral-green-dark mb-6 text-center">
              Flowers for Every Occasion
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-center">
              Whatever the celebration or sentiment, we have the perfect floral arrangement to convey your message.
              Browse our occasion-specific collections below.
            </p>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {occasions.map((occasion) => (
                <Link to={`/occasions/${occasion.id}`} key={occasion.id} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform group-hover:shadow-md group-hover:-translate-y-1">
                    <div className="h-48 bg-gray-100 relative">
                      {/* Image placeholder - in a real app, you'd use the actual image */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                        {occasion.title} Image
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif font-bold text-lg text-floral-green-dark group-hover:text-floral-green-dark/80">
                        {occasion.title}
                      </h3>
                      <p className="text-gray-600 mt-2 text-sm">
                        {occasion.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-floral-green-dark mb-6">
              Need Something Custom?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Can't find what you're looking for? Our floral designers can create a custom arrangement 
              tailored to your specific occasion and preferences.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-floral-green-dark text-white py-3 px-6 rounded-md hover:bg-floral-green-dark/90 transition-colors"
            >
              Contact Us for Custom Orders
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Occasions;
