
import React from "react";
import { Truck, Clock, Award, Flower } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Same Day Delivery",
    description: "Order by 2PM for delivery today in select cities",
  },
  {
    icon: Award,
    title: "Freshness Guarantee",
    description: "7-day freshness guarantee or your money back",
  },
  {
    icon: Flower,
    title: "Handcrafted Designs",
    description: "Each bouquet is uniquely arranged by our expert florists",
  },
  {
    icon: Clock,
    title: "Easy Returns",
    description: "Not satisfied? Contact us within 24 hours",
  },
];

const InfoBanner = () => {
  return (
    <section className="py-12 bg-floral-green-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-3 bg-white/10 rounded-full">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="font-serif font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
