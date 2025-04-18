
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-floral-green-dark mb-6">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-8">
              Have questions about our flowers or delivery? Need help with a special order? 
              Our friendly customer service team is here to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-floral-green-dark/10 rounded-full">
                  <Phone className="text-floral-green-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-500 text-sm">Monday to Saturday, 9am - 6pm IST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-floral-green-dark/10 rounded-full">
                  <Mail className="text-floral-green-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-gray-600">hello@vivekflowers.com</p>
                  <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-floral-green-dark/10 rounded-full">
                  <MapPin className="text-floral-green-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Visit Our Store</h3>
                  <p className="text-gray-600">123 Flower Street, Green Garden</p>
                  <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-floral-green-dark/10 rounded-full">
                  <Clock className="text-floral-green-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Store Hours</h3>
                  <p className="text-gray-600">Monday to Saturday: 9am - 8pm</p>
                  <p className="text-gray-600">Sunday: 10am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-serif font-bold text-floral-green-dark mb-6">
              Send us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-floral-green-dark focus:border-floral-green-dark"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-floral-green-dark focus:border-floral-green-dark"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-floral-green-dark focus:border-floral-green-dark"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-floral-green-dark focus:border-floral-green-dark"
                  rows={5}
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-floral-green-dark text-white py-3 px-6 rounded-md hover:bg-floral-green-dark/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
