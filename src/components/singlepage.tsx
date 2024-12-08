import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function SingleProductPage() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <nav className="flex space-x-4 text-sm font-medium">
          <a href="/" className="hover:text-gray-700">Home</a>
          <span>/</span>
          <a href="/shop" className="hover:text-gray-700">Shop</a>
          <span>/</span>
          <a href="/shop/asgaard-sofa" className="text-gray-500">Asgaard Sofa</a>
        </nav>
        <div className="flex space-x-4">
          <FaHeart className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>
      </header>

      {/* Product Details */}
      <main className="px-4 py-8 md:px-10 lg:px-20">
        {/* Product Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <img
              src="/sofa-main.jpg"
              alt="Asgaard Sofa"
              className="w-full h-auto rounded-lg"
            />
            <div className="flex space-x-2 mt-4">
              <img
                src="/sofa-thumb1.jpg"
                alt="Sofa Thumbnail 1"
                className="w-20 h-20 object-cover rounded-md border"
              />
              <img
                src="/sofa-thumb2.jpg"
                alt="Sofa Thumbnail 2"
                className="w-20 h-20 object-cover rounded-md border"
              />
              <img
                src="/sofa-thumb3.jpg"
                alt="Sofa Thumbnail 3"
                className="w-20 h-20 object-cover rounded-md border"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold">Asgaard Sofa</h1>
            <p className="text-lg text-gray-500 mt-2">Rs. 25,000.00</p>
            <p className="text-sm text-gray-400 mt-1">(3 customer reviews)</p>

            {/* Colors */}
            <div className="mt-4">
              <h3 className="font-semibold">Colors:</h3>
              <div className="flex space-x-2 mt-2">
                <span className="w-6 h-6 rounded-full bg-gray-200 border"></span>
                <span className="w-6 h-6 rounded-full bg-black border"></span>
                <span className="w-6 h-6 rounded-full bg-blue-500 border"></span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-6 flex items-center space-x-4">
              <input
                type="number"
                defaultValue={1}
                className="w-16 border p-2 rounded text-center"
              />
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-700">
                Add To Cart
              </button>
            </div>

            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <FaHeart className="text-gray-700 cursor-pointer" />
              <p>Add to Wishlist</p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-12">
          <div className="flex space-x-8 border-b">
            <button className="pb-2 border-b-2 border-black">Description</button>
            <button className="pb-2">Additional Information</button>
            <button className="pb-2">Reviews (5)</button>
          </div>
          <div className="mt-6 text-gray-600">
            <p>
              The Asgaard Sofa offers unmatched comfort and style. With its sleek, minimalist design,
              it’s perfect for any modern home. Featuring premium materials, it’s built to last while
              adding elegance to your space.
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <img
                src="/product1.jpg"
                alt="Product 1"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-2 text-sm font-medium">Product 1</h3>
              <p className="text-gray-500">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <img
                src="/product2.jpg"
                alt="Product 2"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-2 text-sm font-medium">Product 2</h3>
              <p className="text-gray-500">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <img
                src="/product3.jpg"
                alt="Product 3"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-2 text-sm font-medium">Product 3</h3>
              <p className="text-gray-500">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <img
                src="/product4.jpg"
                alt="Product 4"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-2 text-sm font-medium">Product 4</h3>
              <p className="text-gray-500">Rs. 25,000.00</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 mt-12 text-center">
        <p className="text-sm text-gray-500">
          2024 My Furniture Store. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
