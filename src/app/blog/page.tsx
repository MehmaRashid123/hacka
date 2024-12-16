import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { FiSearch, FiCalendar, FiUser } from "react-icons/fi";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div>

      <Header bgColor="white" />

     
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('/image/Rectangle 1.png')`, 
        }}
      >
        <div className="text-center bg-opacity-50 px-4 py-2 rounded">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Blog</h1>
          <p className="text-xs sm:text-sm mt-2">Home &gt; Blog</p>
        </div>
      </div>

 
      <main className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
         
          <div className="lg:col-span-3 space-y-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
             
                <Image
                  src={`https://via.placeholder.com/1200x500?text=Blog+Post+${idx + 1}`}
                  alt="Blog Post"
                  className="w-full h-48 sm:h-64 object-cover"
                />
         
                <div className="p-4 sm:p-6">
                  <h2 className="text-base sm:text-lg font-bold">
                    Blog Post Title {idx + 1}
                  </h2>
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm mt-2 space-x-4">
                    <div className="flex items-center space-x-1">
                      <FiUser />
                      <span>Admin</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiCalendar />
                      <span>Dec 8, 2024</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm mt-4">
                    A short description of the blog post goes here. This is a
                    placeholder for the post content.
                  </p>
                  <button className="mt-4 text-indigo-600 text-xs sm:text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
          
            <div className="bg-white shadow rounded-lg p-4 sm:p-6">
              <h3 className="font-medium text-base sm:text-lg mb-4 flex items-center">
                Categories
                <FiSearch className="ml-auto text-gray-500" />
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Category 1", "Category 2", "Category 3"].map((category) => (
                  <li key={category} className="hover:text-indigo-600">
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow rounded-lg p-4 sm:p-6">
              <h3 className="font-medium text-base sm:text-lg mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <li key={idx} className="flex items-center space-x-4">
                    <Image
                      src={`https://via.placeholder.com/100x100?text=Post+${idx + 1}`}
                      alt={`Post ${idx + 1}`}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                    />
                    <p className="text-sm text-gray-600">Recent Post {idx + 1}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-3 py-1 sm:px-4 sm:py-2 mx-1 border border-gray-300 bg-white text-gray-600 rounded-md">
            Prev
          </button>
          <button className="px-3 py-1 sm:px-4 sm:py-2 mx-1 border border-gray-300 bg-gray-200 text-gray-600 rounded-md">
            1
          </button>
          <button className="px-3 py-1 sm:px-4 sm:py-2 mx-1 border border-gray-300 bg-white text-gray-600 rounded-md">
            2
          </button>
          <button className="px-3 py-1 sm:px-4 sm:py-2 mx-1 border border-gray-300 bg-white text-gray-600 rounded-md">
            3
          </button>
          <button className="px-3 py-1 sm:px-4 sm:py-2 mx-1 border border-gray-300 bg-white text-gray-600 rounded-md">
            Next
          </button>
        </div>
      </main>

   
      <Footer />
    </div>
  );
};

export default BlogPage;
