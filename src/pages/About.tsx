
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-floral-green-dark/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-floral-green-dark mb-6 text-center">
              About VivekFlowers
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center">
              Creating moments of joy through beautiful floral arrangements since 2010
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-floral-green-dark mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    VivekFlowers began with a simple passion for bringing natural beauty into people's lives. 
                    Founded by Vivek Sharma in 2010, our journey started as a small flower shop in Mumbai with 
                    a commitment to quality and freshness.
                  </p>
                  <p>
                    Over the years, we've grown from a neighborhood florist to a nationwide floral delivery 
                    service, but our core values remain unchanged. We still handpick every stem and 
                    craft each bouquet with care and attention to detail.
                  </p>
                  <p>
                    Today, we're proud to deliver happiness across India, helping our customers celebrate 
                    special moments and express their feelings through the timeless language of flowers.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 h-80 rounded-lg">
                {/* Placeholder for about image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Founder Image
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-floral-green-dark mb-12 text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif font-bold text-floral-green-dark mb-4">Quality</h3>
                <p className="text-gray-600">
                  We source only the freshest flowers from trusted growers, ensuring that 
                  every bouquet maintains its beauty for at least 7 days.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif font-bold text-floral-green-dark mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to eco-friendly practices, from reducing plastic in our packaging 
                  to supporting local flower farmers and sustainable growing methods.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif font-bold text-floral-green-dark mb-4">Service</h3>
                <p className="text-gray-600">
                  Customer satisfaction is our priority. We strive to make every experience with us 
                  special, from easy ordering to timely delivery and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-floral-green-dark mb-6">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              Behind every beautiful bouquet is our talented team of floral designers, 
              customer service specialists, and delivery experts working together to 
              bring joy to your doorstep.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-60 bg-gray-200">
                    {/* Team member photo placeholder */}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">Team Member {item}</h3>
                    <p className="text-gray-600">Floral Designer</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
