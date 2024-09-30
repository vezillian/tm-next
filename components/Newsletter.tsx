import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#150A5C] relative overflow-hidden py-16 sm:py-24">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-56 h-56 bg-indigo-500 opacity-10 rounded-full translate-x-1/3 -translate-y-1/3" />

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-8 leading-tight">
          Don&apos;t Miss Out! Subscribe for Exclusive Insights to Stay Ahead!
          </h2>
          <form className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                name="email"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#150A5C] transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
