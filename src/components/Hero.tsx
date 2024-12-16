import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full lg:h-[600px] py-16 px-6 lg:px-10 bg-[#FBEBB5]">
      <div className="text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="font-poppins font-medium text-3xl lg:text-5xl text-gray-800 leading-snug mb-6">
          Rocket single <br /> seater
        </h1>
        <button className="px-5 py-3 text-white bg-black rounded-lg hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      <div className="w-full max-w-sm lg:max-w-lg">
        <Image
          src="/image/hchair.png"
          alt="Rocket single seater"
          width={500}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export const Hero1 = () => {
  return (
    <section className="bg-[#FAF4F4] py-16 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="text-center">
            <Image
              src={`/image/table${i + 2}.png`}
              alt="Side table"
              width={500}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Side table</h3>
            <a href="#" className="text-black hover:underline font-medium">
              View More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Hero2 = () => {
  const products = [
    { id: 1, title: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/image/1.png" },
    { id: 2, title: "Granite dining table", price: "Rs. 25,000.00", image: "/image/2.png" },
    { id: 3, title: "Outdoor bar table", price: "Rs. 25,000.00", image: "/image/3.png" },
    { id: 4, title: "Plain console", price: "Rs. 25,000.00", image: "/image/4.png" },
  ];

  return (
    <section className="bg-[#FFFFFF] font-poppins py-16 px-6 lg:px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Top Picks For You</h2>
        <p className="text-gray-600 mb-10">
          Find a bright ideal to suit your taste with our great selection of lights.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-700">{product.title}</h3>
              <p className="mt-2 text-xl font-bold text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="pt-10 underline cursor-pointer">View all</div>
      </div>
    </section>
  );
};

export const Hero3 = () => {
  return (
    <section className="bg-[#FFF9E5] py-20">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <Image
            src="/image/table8.png"
            alt="Asgaard Sofa"
            width={983}
            height={799}
            className="rounded-md w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">New Arrivals</h1>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">Asgaard Sofa</h2>
          <button className="border-2 border-black text-black px-6 py-3 hover:bg-gray-100 transition">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export const Hero4 = () => {
  const blogPosts = [
    { id: 1, title: "Going all-in with millennial design", date: "5 min read | Oct 2023", image: "/image/blog1.png" },
    { id: 2, title: "Going all-in with millennial design", date: "5 min read | Oct 2023", image: "/image/blog2.png" },
    { id: 3, title: "Going all-in with millennial design", date: "5 min read | Oct 2023", image: "/image/blog3.png" },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Blogs</h2>
        <p className="text-gray-600 mb-12">Find a bright ideal to suit your taste with our great selection.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-50 rounded-md shadow-md">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.date}</p>
                <Link href="/blog">
                  <button className="mt-4 text-blue-600 hover:underline">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Hero5 = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[300px] bg-[#FAFAFA]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/image/bginsta.png')" }}
      ></div>
      <div className="relative text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Instagram</h2>
        <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
        <button className="px-6 py-2 bg-white text-gray-800 rounded-full shadow-md hover:bg-gray-100 transition">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
