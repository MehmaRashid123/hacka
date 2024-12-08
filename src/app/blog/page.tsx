// app/blog/page.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { FiSearch, FiCalendar, FiUser } from "react-icons/fi"; // Icons for search, date, and admin

const BlogPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Header bgColor="white" />

      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('/image/Rectangle 1.png')`, // Replace with actual hero image path
        }}
      >
        <div className="text-center bg-opacity-50 px-4 py-2 rounded">
          <h1 className="text-4xl font-bold text-black">Blog</h1>
          <p className="text-sm mt-2">Home &gt; Blog</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Blog Posts */}
          <div className="lg:col-span-3 space-y-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                {/* Blog Post Image */}
                <img
                  src={`https://via.placeholder.com/1200x500?text=Blog+Post+${idx + 1}`}
                  alt="Blog Post"
                  className="w-full h-64 object-cover"
                />
                {/* Blog Post Content */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-lg font-bold">
                    Blog Post Title {idx + 1}
                  </h2>
                  {/* Admin and Date Info */}
                  <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
                    <div className="flex items-center space-x-1">
                      <FiUser />
                      <span>Admin</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiCalendar />
                      <span>Dec 8, 2024</span>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-gray-500 text-sm mt-4">
                    A short description of the blog post goes here. This is a
                    placeholder for the post content.
                  </p>
                  {/* Read More */}
                  <button className="mt-4 text-indigo-600 text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Categories */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="font-medium text-lg mb-4 flex items-center">
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

            {/* Recent Posts */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="font-medium text-lg mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <li key={idx} className="flex items-center space-x-4">
                    <img
                      src={`https://via.placeholder.com/100x100?text=Post+${idx + 1}`}
                      alt={`Post ${idx + 1}`}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <p className="text-sm text-gray-600">Recent Post {idx + 1}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 mx-1 border border-gray-300 bg-white text-gray-600 rounded-md">
            Prev
          </button>
          <button className="px-4 py-2 mx-1 border border-gray-300 bg-gray-200 text-gray-600 rounded-md">
            1
          </button>
          <button className="px-4 py-2 mx-1 border border-gray-300 bg-white text-gray-600 rounded-md">
            2
          </button>
          <button className="px-4 py-2 mx-1 border border-gray-300 bg-white text-gray-600 rounded-md">
            3
          </button>
          <button className="px-4 py-2 mx-1 border border-gray-300 bg-white text-gray-600 rounded-md">
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;
