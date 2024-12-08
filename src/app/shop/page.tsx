"use client"; // Mark this file as a client component

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock list of 16 products
const products = [
  { id: 1, name: "Modern Modular Sofa", price: 25000, image: "/image/1.png" },
  { id: 2, name: "Dining Table with Chairs", price: 25000, image: "/image/2.png" },
  { id: 3, name: "Outdoor Bar Table", price: 25000, image: "/image/3.png" },
  { id: 4, name: "Plain Console with Rack", price: 25000, image: "/image/4.png" },
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
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header bgColor="white" />

      {/* Product Grid */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} legacyBehavior>
              <div className="border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/image/placeholder.png";
                  }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                  <p className="mt-2 text-yellow-600 font-semibold">Rs. {product.price.toLocaleString()}</p>
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
