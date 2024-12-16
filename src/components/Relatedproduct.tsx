const RelatedProducts = () => {
  const products = [
    { id: 1, name: "Tversted Modular Sofa", price: 25000 },
    { id: 2, name: "Outdoor Dining Table", price: 25000 },
    { id: 3, name: "Rich Wooden Stool", price: 25000 },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <p className="font-medium text-lg">{product.name}</p>
            <p className="text-gray-700">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
