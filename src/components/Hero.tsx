import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full h-auto lg:h-[600px] py-16 px-6 lg:px-10 bg-[#FBEBB5]">
      {/* Left Content */}
      <div className="text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="font-poppins font-medium text-3xl lg:text-5xl text-gray-800 leading-snug mb-6">
          Rocket single seater
        </h1>
        <button className="px-6 py-3 text-white bg-black rounded-lg hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full max-w-sm lg:max-w-lg">
        <img
          src="/image/hchair.png"
          alt="Rocket single seater"
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
        {/* Side Table 1 */}
        <div className="text-center">
          <img
            src="/image/table2.png"
            alt="Side table"
            className="mx-auto rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            Side table
          </h3>
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
          >
            View More
          </a>
        </div>

        {/* Side Table 2 */}
        <div className="text-center">
          <img
            src="/image/table3.png"
            alt="Side table"
            className="mx-auto rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            Side table
          </h3>
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export const Hero2 = () => {
  return (
    <section className="bg-[#FFF9E5] py-20">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Section - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            New Arrivals
          </h1>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Asgaard Sofa
          </h2>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700">
            Order Now
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/image/table8.png"
            alt="Asgaard Sofa"
            width={600}
            height={400}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export const Hero3 = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      date: "5 min read | Oct 2023",
      image: "/image/blog1.png",
    },
    {
      id: 2,
      title: "Going all-in with millennial design",
      date: "5 min read | Oct 2023",
      image: "/image/blog2.png",
    },
    {
      id: 3,
      title: "Going all-in with millennial design",
      date: "5 min read | Oct 2023",
      image: "/image/blog3.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Our Blogs
        </h2>
        <p className="text-gray-600 mb-12">
          Find a bright ideal to suit your taste with our great selection.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-md shadow-md overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm">{post.date}</p>
                <button className="mt-4 text-blue-600 font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
