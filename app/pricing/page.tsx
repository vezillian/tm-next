// import React from 'react';

// const Pricing: React.FC = () => {
//   return (
//     <section className="features-area features-style-one purple-dark pt-28 pb-18 relative overflow-hidden">
//       {/* Shapes */}
//       <div className="absolute top-0 left-0 shape-one" data-depth="5"><span></span></div>
//       <div className="absolute top-0 right-0 shape-two"><span></span></div>
//       <div className="absolute bottom-0 left-0 shape-three" data-depth="8"><span></span></div>
//       <div className="absolute bottom-0 right-0 shape-four" data-depth="5"><span></span></div>
      
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <div className="flex justify-center">
//           <div className="text-center mb-14" data-aos="fade-up" data-aos-delay="40">
//             <h2 className="text-white">Choose the Perfect Plan for Your Business</h2>
//           </div>
//         </div>
        
//         {/* Pricing Plans */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
//           {/* Basic Plan */}
//           <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-up" data-aos-delay="50">
//             <div className="text-center mb-6">
//               <h5 className="text-xl font-semibold">Basic</h5>
//               <h2 className="text-4xl font-bold mb-2">KES 500</h2>
//               <span className="text-gray-500">/month</span>
//             </div>
//             <ul className="list-none space-y-2 mb-6">
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">&#10004;</span>
//                 Up to 500 transactions/month
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">&#10004;</span>
//                 Basic reporting
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">&#10004;</span>
//                 Email support
//               </li>
//             </ul>
//             <div className="text-center">
//               <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//                 Get Started
//               </button>
//             </div>
//           </div>

//           {/* Pro Plan */}
//           <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-up" data-aos-delay="60">
//             <div className="text-center mb-6">
//               <h5 className="text-xl font-semibold">Pro</h5>
//               <h2 className="text-4xl font-bold mb-2">KES 1500</h2>
//               <span className="text-gray-500">/month</span>
//             </div>
//             <ul className="list-none space-y-2 mb-6">
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">&#10004;</span>
//                 Unlimited transactions
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">&#10004;</span>
//                 Advanced reporting
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">&#10004;</span>
//                 24/7 phone support
//               </li>
//             </ul>
//             <div className="text-center">
//               <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//                 Get Started
//               </button>
//             </div>
//           </div>

//           {/* Enterprise Plan */}
//           <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-up" data-aos-delay="70">
//             <div className="text-center mb-6">
//               <h5 className="text-xl font-semibold">Enterprise</h5>
//               <h2 className="text-4xl font-bold mb-2">KES 5000</h2>
//               <span className="text-gray-500">/month</span>
//             </div>
//             <ul className="list-none space-y-2 mb-6">
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">&#10004;</span>
//                 Custom solutions
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">&#10004;</span>
//                 Dedicated account manager
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">&#10004;</span>
//                 API access
//               </li>
//             </ul>
//             <div className="text-center">
//               <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//                 Get Started
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// import React from 'react';
// import { motion } from 'framer-motion';

// const PricingCard = ({ title, price, features, isPopular }) => (
//   <motion.div
//     className={`bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-xl shadow-xl overflow-hidden ${
//       isPopular ? 'border-2 border-indigo-400' : ''
//     }`}
//     whileHover={{ scale: 1.05 }}
//     transition={{ type: 'spring', stiffness: 300 }}
//   >
//     <div className="p-8">
//       <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
//       <div className="text-indigo-300 mb-6">
//         <span className="text-4xl font-bold">KES {price}</span>
//         <span className="text-xl">/month</span>
//       </div>
//       <ul className="space-y-3 mb-8">
//         {features.map((feature, index) => (
//           <li key={index} className="flex items-center text-indigo-100">
//             <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//             {feature}
//           </li>
//         ))}
//       </ul>
//       <button className="w-full py-3 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1">
//         Get Started
//       </button>
//     </div>
//   </motion.div>
// );

// const Pricing = () => {
//   const plans = [
//     {
//       title: 'Basic',
//       price: '500',
//       features: ['Up to 500 transactions/month', 'Basic reporting', 'Email support'],
//     },
//     {
//       title: 'Pro',
//       price: '1,500',
//       features: ['Unlimited transactions', 'Advanced reporting', '24/7 phone support'],
//       isPopular: true,
//     },
//     {
//       title: 'Enterprise',
//       price: '5,000',
//       features: ['Custom solutions', 'Dedicated account manager', 'API access'],
//     },
//   ];

//   return (
//     <section className="bg-[#0C1433] text-white py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h2>
//           <p className="text-xl text-indigo-300">Tailored solutions for your business needs</p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={plan.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <PricingCard {...plan} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;

// export default Pricing;
"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({ title, price, features, isPopular }) => (
  <motion.div
    className={`bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-xl shadow-xl overflow-hidden ${
      isPopular ? 'border-2 border-indigo-400' : ''
    }`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="p-8">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="text-white mb-6">
        <span className="text-4xl font-bold">KES {price}</span>
        <span className="text-xl">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-indigo-100">
            <svg
              className="w-5 h-5 mr-2 text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1">
        Get Started
      </button>
    </div>
  </motion.div>
);

const Pricing: FC = () => {
  const plans = [
    {
      title: 'Basic',
      price: '500',
      features: ['Up to 500 transactions/month', 'Basic reporting', 'Email support'],
    },
    {
      title: 'Pro',
      price: '1,500',
      features: ['Unlimited transactions', 'Advanced reporting', '24/7 phone support'],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: '5,000',
      features: ['Custom solutions', 'Dedicated account manager', 'API access'],
    },
  ];

  return (
    <section className="bg-[#192966] text-white pt-40 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h2>
          <p className="text-xl text-white">Tailored solutions for your business needs</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

