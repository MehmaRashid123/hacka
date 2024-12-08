"use client";

import React from "react";

interface SlidingCartProps {
    isOpen: boolean;
    toggleCart: () => void;
}

const SlidingCart: React.FC<SlidingCartProps> = ({ isOpen, toggleCart }) => {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
        >
            {/* Cart Header */}
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <button
                    onClick={toggleCart}
                    className="text-gray-600 hover:text-black"
                >
                    ✕
                </button>
            </div>

            {/* Cart Content */}
            <div className="p-4">
                <p>Your cart is empty.</p>
            </div>
        </div>
    );
};

export default SlidingCart;
