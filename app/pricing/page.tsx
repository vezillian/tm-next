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
    <section className="bg-[#fff] text-white pt-40 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">Choose Your Perfect Plan</h2>
          <p className="text-xl text-black">Tailored solutions for your business needs</p>
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

