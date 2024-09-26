// import { FC } from 'react';

// const Newsletter: FC = () => {
//   return (
//     <section className="bg-[#150A5C] relative overflow-hidden">
//       {/* Shapes */}
//       <div className="shape shape-one absolute top-0 left-0 z-0">
//         <span className="block"></span>
//       </div>
//       <div className="shape shape-two absolute top-0 right-0 z-0">
//         <span className="block"></span>
//       </div>

//       {/* Container */}
//       <div className="container mx-auto px-6">
//         <div className="flex justify-center">
//           <div className="lg:w-1/2">
//             <div
//               className="text-wrapper pt-24 pb-24"
//               data-aos="fade-up"
//               data-aos-delay="50"
//             >
//               <div className="section-title">
//                 <h2 className="text-white text-3xl font-bold">Subscribe now to Our Newsletter</h2>
//               </div>
//               <form>
//                 <div className="flex flex-col md:flex-row mt-6">
//                   <input
//                     type="email"
//                     className="form-control w-full md:w-3/4 p-3 rounded-l-md border border-gray-300"
//                     placeholder="Email Address...."
//                     name="email"
//                     required
//                   />
//                   <button className="main-btn btn-blue-dark md:ml-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
//                     Subscribe Now
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;

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
            Subscribe to Our Newsletter
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
