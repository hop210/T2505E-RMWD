import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          
          <span className="font-bold text-xl">FPT Aptech</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#about" className="hover:text-orange-500">About Us</a>
          <a href="#products" className="hover:text-orange-500">Products</a>
          <a href="#booking" className="hover:text-orange-500">Booking</a>
          <a href="#locations" className="hover:text-orange-500">Locations</a>
        </nav>

        {/* Buttons */}
        <div className="space-x-3">
          <button className="px-4 py-1 border rounded text-sm">Sign In</button>
          <button className="px-4 py-1 bg-orange-500 text-white rounded text-sm">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
