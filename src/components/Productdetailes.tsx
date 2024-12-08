// components/ProductDetails.tsx
const ProductDetails = () => {
    return (
      <div className="p-8 bg-gray-50">
        <div className="flex gap-8">
          {/* Product Images */}
          <div className="flex-1 space-y-4">
            <img src="/product-main.jpg" alt="Product" className="rounded-lg" />
            <div className="grid grid-cols-4 gap-2">
              <img src="/thumb1.jpg" alt="Thumbnail" className="rounded-lg" />
              <img src="/thumb2.jpg" alt="Thumbnail" className="rounded-lg" />
              <img src="/thumb3.jpg" alt="Thumbnail" className="rounded-lg" />
              <img src="/thumb4.jpg" alt="Thumbnail" className="rounded-lg" />
            </div>
          </div>
  
          {/* Product Information */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">Asgaard Sofa</h1>
            <p className="text-2xl text-green-700 mb-4">₹25,000</p>
            <p className="text-gray-600 mb-4">
              The Asgaard sofa is a modern take on classic Scandinavian furniture. Designed for comfort and style.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;
  