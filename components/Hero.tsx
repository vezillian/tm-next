"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Inventory Management",
      description: "Track stock levels in real-time and automate reordering.",
      image: "/images/inventory.jpg",
    },
    {
      title: "Sales Analytics",
      description:
        "Gain insights into your best-selling products and peak hours.",
      image: "/images/analytics.jpg",
    },
    {
      title: "Customer Relationship Management",
      description: "Build customer profiles and track purchasing history.",
      image: "/images/customer.jpg",
    },
    {
      title: "Multi-store Support",
      description: "Manage multiple locations from a single dashboard.",
      image: "/images/store2.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className="relative bg-cover bg-center pt-40 pb-20 text-white">
      <div className="absolute inset-0 bg-[#192966]"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div
            className="lg:w-5/12 mb-10 lg:mb-0 lg:px-10 px-4"
            data-aos="fade-up"
          >
            <h1 className="text-xl lg:text-2xl font-bold mb-6 leading-tight">
              Welcome to Transmall Business: Empowering MSMEs with Smart Solutions
            </h1>
            <h1 className="text-xl lg:text-xl font-bold mb-6 leading-tight">
              Transform Your Business Operations Today!
            </h1>
            <h5 className="text-base font-semi-bold mb-8 text-gray-300 leading-relaxed">
              Are you a Duka owner, supermarket manager, pharmacy operator, or a business in the service, trade, or manufacturing sectors seeking to streamline your operations and enhance profitability? At Transmall Business, we specialise in delivering robust data and AI-driven tools that help businesses like yours to harness the power of data for growth.
              <Link
                href="/login_signup"
                className="font-semibold text-yellow-500 px-2"
                // className="font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-2 py-2 rounded-lg text-sm"
              >
                Join 
              </Link>
               the ranks of successful MSMEs reaping the benefits of data-driven decision-making.
            </h5>
          </div>

          <div className="lg:w-1/12"></div>

          <div className="lg:w-5/12 w-full px-10">
            <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-lg">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority // Ensure lazy loading doesn't interfere with transitions
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0C1433] p-4 text-center sm:text-left">
                    <h4 className="text-white font-extrabold text-lg sm:text-2xl mb-3 leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-white text-sm sm:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const services = [
//     {
//       title: 'Inventory Management',
//       description: 'Track stock levels in real-time and automate reordering.',
//       image: '/images/inventory.jpg',
//     },
//     {
//       title: 'Sales Analytics',
//       description: 'Gain insights into your best-selling products and peak hours.',
//       image: '/images/analytics.jpg',
//     },
//     {
//       title: 'Customer Management',
//       description: 'Build customer profiles and track purchasing history.',
//       image: '/images/customer.jpg',
//     },
//     {
//       title: 'Multi-store Support',
//       description: 'Manage multiple locations from a single dashboard.',
//       image: '/images/store2.jpg',
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 py-20 text-white">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center justify-between">
//           <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0" data-aos="fade-up">
//             <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
//               Revolutionize Your Business with Our POS ERP Solution
//             </h1>
//             <h5 className="text-xl mb-8 text-gray-300 leading-relaxed">
//               Manage inventory, boost sales, and streamline operations all in one powerful platform.
//             </h5>
//             <Link href="/login_signup" className="inline-block bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-105">
//               Start Free Trial
//             </Link>
//           </div>

//           <div className="lg:w-1/2 w-full">
//             <div className="relative w-full aspect-square max-w-md mx-auto lg:mr-20 overflow-hidden rounded-lg shadow-2xl">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
//                     index === currentSlide ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 >
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg"
//                     priority
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6">
//                     <h4 className="text-white font-bold text-xl mb-2">{service.title}</h4>
//                     <p className="text-gray-200 text-base">{service.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Hero;
