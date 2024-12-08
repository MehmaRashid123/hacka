import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const AccountPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <Header bgColor="white" />

      {/* Main Content */}
      <main className="container mx-auto flex flex-col lg:flex-row mt-8 lg:mt-16 px-4 lg:px-0">
        {/* Login Form */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-6">Log In</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-700 font-medium">
                Username or email address
              </label>
              <input
                id="username"
                type="text"
                className="w-full mt-1 px-3 py-2 border rounded-md"
                placeholder="Enter your username or email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full mt-1 px-3 py-2 border rounded-md"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center">
              <input id="remember-me" type="checkbox" className="mr-2" />
              <label htmlFor="remember-me" className="text-gray-700">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-medium rounded-md"
            >
              Log In
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            <a href="#" className="hover:underline">
              Lost Your Password?
            </a>
          </p>
        </div>

        {/* Register Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Register</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="w-full mt-1 px-3 py-2 border rounded-md"
                placeholder="Enter your email address"
              />
            </div>
            <p className="text-sm text-gray-600">
              A link to set a new password will be sent to your email address.
            </p>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-medium rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-gray-100 py-8 mt-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left px-4 lg:px-0">
          <div className="w-full lg:w-1/3 px-4">
            <h3 className="text-lg font-medium">Free Delivery</h3>
            <p className="text-gray-600">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <h3 className="text-lg font-medium">90 Days Return</h3>
            <p className="text-gray-600">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <h3 className="text-lg font-medium">Secure Payment</h3>
            <p className="text-gray-600">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AccountPage;
