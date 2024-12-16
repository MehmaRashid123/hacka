"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Address</h3>
            <p className="text-gray-600 leading-relaxed">
              405 University Drive Suite 203 <br />
              Coral Gables, FL 33134, USA
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/home" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-gray-600 hover:text-gray-900">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="/payment-options" className="text-gray-600 hover:text-gray-900">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="/returns" className="text-gray-600 hover:text-gray-900">
                  Returns
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to get updates on our latest offers.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 p-3 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-3 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-gray-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-600">
            © {new Date().getFullYear()} ModelzHouse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Returns
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Payment Options
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
