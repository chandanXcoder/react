import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md dark:bg-gray-900 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          MyWebsite
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Services</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</a>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 pl-9 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
          </div>

          <Button className="rounded-full">Login</Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-300">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4">
          <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Services</a>
          <a href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</a>
          <Button className="w-full rounded-full">Login</Button>
        </div>
      )}
    </nav>
  );
}
