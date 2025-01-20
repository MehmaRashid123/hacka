// pages/product/[id].tsx

import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define TypeScript types for the product structure
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: 'Modern Modular Sofa', price: 25000, image: '/image/1.png', description: 'A modern modular sofa with premium upholstery.' },
  { id: 2, name: 'Dining Table with Chairs', price: 22000, image: '/image/2.png', description: 'A stylish dining set for your family meals.' },
  { id: 3, name: 'Outdoor Bar Table', price: 27000, image: '/image/3.png', description: 'Perfect for your outdoor bar setup.' },
  { id: 4, name: 'Plain Console with Rack', price: 20000, image: '/image/4.png', description: 'A simple and elegant console table with storage.' },
  { id: 5, name: 'Circular Coffee Table', price: 15000, image: '/image/5.png', description: 'A compact and stylish coffee table for small spaces.' },
  // Add more products as needed
];

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [quantity, setQuantity] = useState(1);

  // Find the product based on the ID from the URL
  const product = products.find((item) => item.id === parseInt(id as string));

  // Handle case where the product is not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header bgColor="white" />
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-600">Product not found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header bgColor="white" />
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="border rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto"
              onError={(e) => (e.currentTarget.src = '/image/placeholder.png')}
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="mt-4 text-yellow-600 font-semibold text-xl">
              Rs. {product.price.toLocaleString()}
            </p>
            <p className="mt-6 text-gray-600">{product.description}</p>

            <div className="mt-6 flex items-center space-x-4">
              <label htmlFor="quantity" className="text-gray-700">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-16 border rounded px-2 py-1 text-gray-700"
              />
            </div>

            <button className="mt-8 px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Additional Product Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
          <p className="mt-4 text-gray-600">
            This product is part of our premium collection. Crafted with high-quality materials, it is designed to
            provide comfort and elegance to your space.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
