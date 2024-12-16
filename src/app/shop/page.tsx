"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

// Products Data
const products = [
  { id: 1, name: "Modern Modular Sofa", price: 25000, image: "/image/1.png" },
  { id: 2, name: "Dining Table with Chairs", price: 22000, image: "/image/2.png" },
  { id: 3, name: "Outdoor Bar Table", price: 27000, image: "/image/3.png" },
  { id: 4, name: "Plain Console with Rack", price: 20000, image: "/image/4.png" },
  { id: 5, name: "Circular Coffee Table", price: 15000, image: "/image/5.png" },
  { id: 6, name: "Rectangular Coffee Table", price: 22500, image: "/image/6.png" },
  { id: 7, name: "Simple Wooden Stool", price: 10000, image: "/image/7.png" },
  { id: 8, name: "Elegant Wooden Cabinet", price: 20000, image: "/image/8.png" },
  { id: 9, name: "Luxury Sofa Set", price: 115000, image: "/image/9.png" },
  { id: 10, name: "Outdoor Sofa Set", price: 244000, image: "/image/10.png" },
  { id: 11, name: "Glass Coffee Table", price: 18000, image: "/image/11.png" },
  { id: 12, name: "Leather Recliner Chair", price: 45000, image: "/image/12.png" },
  { id: 13, name: "Marble Dining Table", price: 52000, image: "/image/13.png" },
  { id: 14, name: "Wooden Bed Frame", price: 35000, image: "/image/14.png" },
  { id: 15, name: "Rattan Lounge Chair", price: 12000, image: "/image/15.png" },
  { id: 16, name: "Teak Wood Bookshelf", price: 23000, image: "/image/16.png" },
];

export default function ShopPage() {
  const [viewMode, setViewMode] = useState("grid"); // Grid or list view toggle

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header bgColor="white" />

      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: `url('/image/Rectangle 1.png')` }}
      >
        <h1 className="text-4xl font-bold">Shop Our Collection</h1>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-300 bg-white">
        <div className="flex items-center space-x-4 text-gray-600">
          {/* Filter Placeholder */}
          <button className="hover:text-gray-800 flex items-center space-x-1">
            <span className="material-icons">filter_list</span>
            <span>Filter</span>
          </button>

          {/* Grid/List View */}
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`hover:text-gray-800 ${viewMode === "grid" ? "text-gray-900 font-bold" : ""}`}
            >
              <span className="material-icons">grid_view</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`hover:text-gray-800 ${viewMode === "list" ? "text-gray-900 font-bold" : ""}`}
            >
              <span className="material-icons">view_list</span>
            </button>
          </div>
          <p className="text-sm text-gray-500">Showing 1–16 of 16 results</p>
        </div>

        {/* Sort Section */}
        <div className="flex items-center space-x-4">
          <span>Sort by</span>
          <select className="border px-2 py-1 rounded text-gray-600">
            <option value="default">Default</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="nameAsc">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-6 py-8">
        <div
          className={`grid ${
            viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" : "grid-cols-1"
          } gap-6`}
        >
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} legacyBehavior>
              <div className="border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.currentTarget.src = "/image/placeholder.png")}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                  <p className="mt-2 text-yellow-600 font-semibold">
                    Rs. {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
