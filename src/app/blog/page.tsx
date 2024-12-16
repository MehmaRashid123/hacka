import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header/>

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
            <h1 className="font-bold">Contact</h1>
            <p className="text-sm mt-2">Home &gt; Contact</p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-12">
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="/image/blog2.png"
                alt="Blog Image 1"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Going all-in with millennial design
                </h2>
                <p className="text-gray-600 mt-2">
                  Discover modern design trends and how they are reshaping the
                  spaces we live in.
                </p>
                <p className="text-gray-400 text-sm mt-4">January 5, 2024</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="/image/blog1.png"
                alt="Blog Image 2"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Exploring new ways of decorating
                </h2>
                <p className="text-gray-600 mt-2">
                  How to transform your living space with affordable decor
                  ideas.
                </p>
                <p className="text-gray-400 text-sm mt-4">December 20, 2023</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="/image/blog3.png"
                alt="Blog Image 3"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-700">
                  Handmade pieces that take time to make
                </h2>
                <p className="text-gray-600 mt-2">
                  The charm of artisanal crafts and their timeless appeal.
                </p>
                <p className="text-gray-400 text-sm mt-4">December 5, 2023</p>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                1
              </button>
              <button className="bg-gray-200 px-3 py-1 rounded">2</button>
              <button className="bg-gray-200 px-3 py-1 rounded">Next</button>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Categories</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 hover:text-yellow-500 cursor-pointer">Design (4)</li>
                <li className="text-gray-600 hover:text-yellow-500 cursor-pointer">Ideas (6)</li>
                <li className="text-gray-600 hover:text-yellow-500 cursor-pointer">DIY (3)</li>
                <li className="text-gray-600 hover:text-yellow-500 cursor-pointer">Crafting (2)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Posts</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <img
                    src="/image/Rectangle 68.png"
                    alt="Recent Post"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <p className="text-gray-600 text-sm">
                    The best ways to brighten your workspace.
                  </p>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src="/image/Rectangle 68.png"
                    alt="Recent Post"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <p className="text-gray-600 text-sm">
                    How minimalism enhances productivity.
                  </p>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src="/image/Rectangle 68.png"
                    alt="Recent Post"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <p className="text-gray-600 text-sm">
                    Handmade decor ideas for your home.
                  </p>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Blog;
