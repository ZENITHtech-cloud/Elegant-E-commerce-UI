import React, { useState } from 'react';
import { SearchIcon, ShoppingBagIcon, MenuIcon, XIcon, UserIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">
            ELEGANCE
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-800 hover:text-gray-600 font-medium">
            Home
          </a>
          <a href="/shop" className="text-gray-800 hover:text-gray-600 font-medium">
            Shop
          </a>
          <a href="/collections" className="text-gray-800 hover:text-gray-600 font-medium">
            Collections
          </a>
          <a href="/about" className="text-gray-800 hover:text-gray-600 font-medium">
            About
          </a>
          <a href="/contact" className="text-gray-800 hover:text-gray-600 font-medium">
            Contact
          </a>
        </nav>
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-800 hover:text-gray-600">
            <SearchIcon size={20} />
          </button>
          <button className="text-gray-800 hover:text-gray-600">
            <UserIcon size={20} />
          </button>
          <button className="text-gray-800 hover:text-gray-600 relative">
            <ShoppingBagIcon size={20} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>
          <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="text-gray-800 hover:text-gray-600 font-medium">
              Home
            </a>
            <a href="/shop" className="text-gray-800 hover:text-gray-600 font-medium">
              Shop
            </a>
            <a href="/collections" className="text-gray-800 hover:text-gray-600 font-medium">
              Collections
            </a>
            <a href="/about" className="text-gray-800 hover:text-gray-600 font-medium">
              About
            </a>
            <a href="/contact" className="text-gray-800 hover:text-gray-600 font-medium">
              Contact
            </a>
          </nav>
        </div>}
    </header>;
}