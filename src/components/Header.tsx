"use client"; // Mark this file as a client component

import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

interface HeaderProps {
  bgColor?: string; // Accept bgColor prop to modify background color
}

const Header = ({ bgColor = "#FBEBB5" }: HeaderProps) => {
  return (
    <header
      className="flex justify-between items-center w-full py-4 px-4 md:px-6 lg:px-10"
      style={{ backgroundColor: bgColor }} // Dynamically set background color
    >
      {/* Navigation Links */}
      <nav className=" pl-[250px] md:flex font-poppins flex items-center justify-between text-[14px] sm:text-[16px] space-x-4 sm:space-x-6 lg:space-x-8">
        <Link href="/" className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
          About Us
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
          Contact
        </Link>
        <Link href="/shop" className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
          Shop
        </Link>
      </nav>

      {/* Icons */}
      <div className="pr-[100px] flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
        <Link href="/account" className="text-gray-700 hover:text-black cursor-pointer transition-colors duration-200">
          <FaUser className="w-4 h-4 sm:w-5 sm:h-5" aria-label="Account" />
        </Link>
        <Link href="/search" className="text-gray-700 hover:text-black cursor-pointer transition-colors duration-200">
          <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" aria-label="Search" />
        </Link>
        <Link href="/wishlist" className="text-gray-700 hover:text-black cursor-pointer transition-colors duration-200">
          <FaHeart className="w-4 h-4 sm:w-5 sm:h-5" aria-label="Wishlist" />
        </Link>
        <Link href="/cart" className="text-gray-700 hover:text-black cursor-pointer transition-colors duration-200">
          <FaShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" aria-label="Cart" />
        </Link>
      </div>

      {/* Mobile Menu (visible only on smaller screens) */}
      <div className="block md:hidden">
        <button className="text-gray-700 hover:text-black">
          {/* Add mobile menu toggle logic here */}
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
