
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, Settings, Package, LogOut } from "lucide-react";

const Account = () => {
  // This is a placeholder until we integrate authentication
  const mockUser = {
    name: "Guest User",
    email: "guest@example.com",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-floral-green-dark mb-6">
            My Account
          </h1>

          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gray-100 rounded-full p-3">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{mockUser.name}</h2>
                <p className="text-gray-600">{mockUser.email}</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Button
              variant="outline"
              className="flex items-center justify-center space-x-2 h-auto py-4"
            >
              <Package className="w-5 h-5" />
              <span>My Orders</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center space-x-2 h-auto py-4"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center space-x-2 h-auto py-4"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </Button>
          </div>

          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Note</h3>
            <p className="text-gray-600">
              Sign in functionality will be added soon. This is currently a placeholder page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
