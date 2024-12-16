import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

const Checkout = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header bgColor="white"/>

      <div
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('/image/Rectangle 1.png')`,
        }}
      >
        <div className="flex flex-col items-center justify-center px-4 py-8">
          <div className="mb-4">
            <Image src="/image/ml.png" alt="Logo" width="500" height="300" className="h-16 w-auto" />
          </div>
          <div className="text-center text-black px-4 py-2 rounded font-medium text-4xl font-poppins">
            <h1 className="font-bold">Checkout</h1>
            <p className="text-sm mt-2">Home &gt; Checkout</p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600">First Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="text-gray-600">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-600">Company name (optional)</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-gray-600">Country / Region</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>United States</option>
                  <option>Canada</option>
                </select>
              </div>
              <div>
                <label className="text-gray-600">Street Address</label>
                <input
                  type="text"
                  placeholder="House number and street name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-gray-600">Town / City</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-gray-600">Province</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-gray-600">ZIP Code</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-gray-600">Phone</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-gray-600">Email Address</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-gray-600">Additional Information</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Ergonomic Chair</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between border-t pt-2 text-gray-600">
                <span>Subtotal:</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-semibold text-xl">
                <span>Total:</span>
                <span>Rs. 250,000.00</span>
              </div>
            </div>
            <div className="mt-6">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-600">
                  Direct Bank Transfer
                </span>
              </label>
              <p className="text-gray-500 text-sm mt-2">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference.
              </p>
            </div>
            <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded">
              Place Order
            </button>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Checkout;
