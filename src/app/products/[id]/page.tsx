
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

const products: Product[] = [
  { id: 1, name: "Modern Modular Sofa", price: 25000, image: "/image/1.png", description: "A modern modular sofa perfect for your living room." },
  { id: 2, name: "Dining Table with Chairs", price: 25000, image: "/image/2.png", description: "Elegant dining table with a set of comfortable chairs." },
  
];

function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === parseInt(id, 10));
}

interface ProductPageProps {
  params: { id: string };  
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params; 
  const product = getProductById(id);

  if (!product) {
    notFound(); 
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header bgColor="white" />
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-start">
          <Image
            src={product.image}
            alt={product.name}
            width={500} 
  height={300}
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
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(), 
  }));
}

