import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

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

export default function SingleProductPage() {
  const router = useRouter();

  if (!router.isReady) {
    return <p className="text-center py-10">Loading...</p>;
  }

  const { id } = router.query;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center py-10">Product not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex space-x-2 text-sm text-gray-500 mb-4 sm:mb-6">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-gray-700">Shop</Link>
        <span>/</span>
        <span className="text-gray-700">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg sm:text-xl text-yellow-600 font-semibold mb-4">
            Rs. {product.price.toLocaleString()}
          </p>
          <p className="text-gray-600 mb-4">
            Experience the elegance and comfort of the {product.name}. Perfect for modern homes.
          </p>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-700">
              Add To Cart
            </button>
            <FaHeart className="text-gray-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
