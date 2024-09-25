// export default function Hero() {
//     return (
//       <div id="hero" className="bg-blue-500 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
//           <p className="text-xl mb-8">Discover amazing services and content</p>
//           <button className="custom-btn">Get Started</button>
//         </div>
//       </div>
//     );
//   }

'use client';

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
//     }, 2000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative bg-cover bg-center py-20 text-white">
//       <div className="absolute inset-0 bg-black opacity-30"></div>
//       <div className="container mx-auto relative z-10 mt-[-60px]">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-5/12 mb-10 lg:mb-0 ml-4" data-aos="fade-up">
//             <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//               Revolutionize Your Business with Our POS ERP Solution
//             </h1>
//             <h5 className="text-xl mb-6">
//               Manage inventory, boost sales, and streamline operations all in one powerful platform.
//             </h5>
//             <Link href="/login_signup" className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
//               Start Free Trial
//             </Link>
//           </div>

//           <div className="lg:w-7/12">
//             <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
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
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 p-4">
//                     <h4 className="text-white font-bold text-xl mb-2">{service.title}</h4>
//                     <p className="text-white">{service.description}</p>
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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: 'Inventory Management',
      description: 'Track stock levels in real-time and automate reordering.',
      image: '/images/inventory.jpg',
    },
    {
      title: 'Sales Analytics',
      description: 'Gain insights into your best-selling products and peak hours.',
      image: '/images/analytics.jpg',
    },
    {
      title: 'Customer Management',
      description: 'Build customer profiles and track purchasing history.',
      image: '/images/customer.jpg',
    },
    {
      title: 'Multi-store Support',
      description: 'Manage multiple locations from a single dashboard.',
      image: '/images/store2.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-cover bg-center pt-40 pb-20 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0 px-4" data-aos="fade-up">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Revolutionize Your Business with Our POS ERP Solution
            </h1>
            <h5 className="text-lg lg:text-xl mb-6">
              Manage inventory, boost sales, and streamline operations all in one powerful platform.
            </h5>
            <Link href="/login_signup" className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
              Start Free Trial
            </Link>
          </div>

          <div className="lg:w-7/12 w-full px-4">
            <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-lg">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
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
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-4 text-center sm:text-left">
                    <h4 className="text-white font-bold text-lg sm:text-xl mb-2">{service.title}</h4>
                    <p className="text-white text-sm sm:text-base">{service.description}</p>
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



export default Hero;

// const Hero = () => {
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

//   return (
//     // <section className="relative bg-cover bg-center py-20 text-white" style={{ backgroundImage: "url('/images/hero-bg-1.png')" }}>
//     <section className="relative bg-cover bg-center py-20 text-white">
//       {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="container mx-auto relative z-10 mt-[-60px]">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-5/12 mb-10 lg:mb-0" data-aos="fade-up">
//             <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//               Revolutionize Your Business with Our POS ERP Solution
//             </h1>
//             <h5 className="text-xl mb-6">
//               Manage inventory, boost sales, and streamline operations all in one powerful platform.
//             </h5>
//             <Link href="/login_signup" className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
//               Start Free Trial
//             </Link>
//           </div>

//           <div className="lg:w-7/12">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {services.map((service, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                   <Image src={service.image} alt={service.title} width={400} height={250} className="w-full h-48 object-cover" />
//                   <div className="p-4">
//                     <h4 className="text-black font-bold text-xl mb-2">{service.title}</h4>
//                     <p className="text-gray-600">{service.description}</p>
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

// export default Hero;