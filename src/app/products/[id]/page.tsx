import { notFound } from "next/navigation"; // For handling invalid routes
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock product data
const products = [
  { id: 1, name: "Modern Modular Sofa", price: 25000, image: "/image/1.png", description: "A modern modular sofa perfect for your living room." },
  { id: 2, name: "Dining Table with Chairs", price: 25000, image: "/image/2.png", description: "Elegant dining table with a set of comfortable chairs." },
  { id: 3, name: "Outdoor Bar Table", price: 25000, image: "/image/3.png", description: "Outdoor bar table for stylish patio setups." },
  { id: 4, name: "Plain Console with Rack", price: 25000, image: "/image/4.png", description: "A plain console with rack storage for modern homes." },
  { id: 5, name: "Circular Coffee Table", price: 15000, image: "/image/5.png", description: "A stylish round coffee table perfect for any living room." },
  { id: 6, name: "Rectangular Coffee Table", price: 22500, image: "/image/6.png", description: "A modern rectangular coffee table to complete your living room." },
  { id: 7, name: "Simple Wooden Stool", price: 10000, image: "/image/7.png", description: "A simple, sturdy wooden stool for various uses." },
  { id: 8, name: "Elegant Wooden Cabinet", price: 20000, image: "/image/8.png", description: "An elegant wooden cabinet for storage and display." },
  { id: 9, name: "Luxury Sofa Set", price: 115000, image: "/image/9.png", description: "A luxury sofa set perfect for large living rooms." },
  { id: 10, name: "Outdoor Sofa Set", price: 244000, image: "/image/10.png", description: "An outdoor sofa set designed for patios and gardens." },
  { id: 11, name: "Glass Coffee Table", price: 18000, image: "/image/11.png", description: "A modern glass coffee table with sleek design." },
  { id: 12, name: "Leather Recliner Chair", price: 45000, image: "/image/12.png", description: "A luxurious leather recliner chair for comfort." },
  { id: 13, name: "Marble Dining Table", price: 52000, image: "/image/13.png", description: "A classy marble dining table for your dining room." },
  { id: 14, name: "Wooden Bed Frame", price: 35000, image: "/image/14.png", description: "A sturdy wooden bed frame with elegant design." },
  { id: 15, name: "Rattan Lounge Chair", price: 12000, image: "/image/15.png", description: "A comfortable rattan lounge chair for relaxing." },
  { id: 16, name: "Teak Wood Bookshelf", price: 23000, image: "/image/16.png", description: "A stylish teak wood bookshelf for your collection." },
];

// Fetch product by ID
function getProductById(id: string) {
  return products.find((product) => product.id === parseInt(id));
}

export default function ProductPage({ params }) {
  const { id } = params; // Access route parameters from the props
  const product = getProductById(id);

  // Handle invalid product ID
  if (!product) {
    notFound(); // Return 404 page if product not found
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header bgColor="white" />

      {/* Product Details */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
          />
          <div className="md:ml-6 mt-6 md:mt-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-yellow-600 font-semibold mt-2">Rs. {product.price.toLocaleString()}</p>
            <p className="text-gray-700 mt-4">{product.description}</p>

            <button className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
