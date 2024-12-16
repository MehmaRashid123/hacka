import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header bgColor="white" />

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
            <h1 className="font-bold">Cart</h1>
            <p className="text-sm mt-2">Home &gt; Cart</p>
          </div>
        </div>
      </div>

      <section className="container mx-auto my-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Product</th>
                  <th className="py-3 px-6 text-center">Price</th>
                  <th className="py-3 px-6 text-center">Quantity</th>
                  <th className="py-3 px-6 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <Image src="/image/14.png" alt="Logo" width="500" height="300" className="h-16 w-auto " />
                      <span>Ergonomic Chair</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">Rs. 20,000.00</td>
                  <td className="py-3 px-6 text-center">1</td>
                  <td className="py-3 px-6 text-right">Rs. 20,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal:</span>
              <span>Rs. 20,000.00</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <span>Tax:</span>
              <span>Rs. 2,000.00</span>
            </div>
            <div className="flex justify-between text-xl font-semibold">
              <span>Total:</span>
              <span>Rs. 22,000.00</span>
            </div>

            <Link href="/checkout">
              <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
