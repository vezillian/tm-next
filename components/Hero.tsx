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

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
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

  return (
    // <section className="relative bg-cover bg-center py-20 text-white" style={{ backgroundImage: "url('/images/hero-bg-1.png')" }}>
    <section className="relative bg-cover bg-center py-20 text-white">
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 mt-[-60px]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0" data-aos="fade-up">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Revolutionize Your Business with Our POS ERP Solution
            </h1>
            <h5 className="text-xl mb-6">
              Manage inventory, boost sales, and streamline operations all in one powerful platform.
            </h5>
            <Link href="/login_signup" className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
              Start Free Trial
            </Link>
          </div>

          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image src={service.image} alt={service.title} width={400} height={250} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-black font-bold text-xl mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
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