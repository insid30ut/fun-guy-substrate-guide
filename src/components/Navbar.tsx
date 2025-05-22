
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-mushroom-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-serif font-bold text-mushroom-600">MycelialFunGuy</span>
            </a>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-medium text-mushroom-700 hover:text-mushroom-500 transition-colors">
              About
            </a>
            <a href="#calculator" className="font-medium text-mushroom-700 hover:text-mushroom-500 transition-colors">
              Calculator
            </a>
            <a href="#varieties" className="font-medium text-mushroom-700 hover:text-mushroom-500 transition-colors">
              Varieties
            </a>
            <a href="#blog" className="font-medium text-mushroom-700 hover:text-mushroom-500 transition-colors">
              Blog
            </a>
            <Button className="bg-mushroom-500 hover:bg-mushroom-600 text-white">
              Subscribe
            </Button>
          </div>
          
          {/* Mobile nav toggle */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-mushroom-600 hover:text-mushroom-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile nav menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg border-t border-mushroom-100">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-mushroom-700 hover:text-mushroom-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#calculator"
              className="block px-3 py-2 rounded-md text-base font-medium text-mushroom-700 hover:text-mushroom-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculator
            </a>
            <a
              href="#varieties"
              className="block px-3 py-2 rounded-md text-base font-medium text-mushroom-700 hover:text-mushroom-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Varieties
            </a>
            <a
              href="#blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-mushroom-700 hover:text-mushroom-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <Button className="w-full bg-mushroom-500 hover:bg-mushroom-600 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
