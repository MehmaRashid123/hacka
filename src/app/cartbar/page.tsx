"use client"; 

import React, { useState } from "react";

const CartBarPage = () => {
  const [isOpen, setIsOpen] = useState(true); 

  return (
    <div>
      
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-xl transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>

        <div className="p-4 flex flex-col gap-4">
          <div className="border rounded-lg p-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium">Product Name</h3>
              <p className="text-sm text-gray-500">Quantity: 1</p>
            </div>
            <span className="text-sm font-medium text-gray-800">$25.00</span>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full bg-green-500 text-white py-2 rounded-lg shadow hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartBarPage;
