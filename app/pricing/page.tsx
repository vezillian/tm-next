import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="features-area features-style-one purple-dark pt-28 pb-18 relative overflow-hidden">
      {/* Shapes */}
      <div className="absolute top-0 left-0 shape-one" data-depth="5"><span></span></div>
      <div className="absolute top-0 right-0 shape-two"><span></span></div>
      <div className="absolute bottom-0 left-0 shape-three" data-depth="8"><span></span></div>
      <div className="absolute bottom-0 right-0 shape-four" data-depth="5"><span></span></div>
      
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex justify-center">
          <div className="text-center mb-14" data-aos="fade-up" data-aos-delay="40">
            <h2 className="text-white">Choose the Perfect Plan for Your Business</h2>
          </div>
        </div>
        
        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Basic Plan */}
          <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-up" data-aos-delay="50">
            <div className="text-center mb-6">
              <h5 className="text-xl font-semibold">Basic</h5>
              <h2 className="text-4xl font-bold mb-2">KES 500</h2>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10004;</span>
                Up to 500 transactions/month
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10004;</span>
                Basic reporting
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10004;</span>
                Email support
              </li>
            </ul>
            <div className="text-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-up" data-aos-delay="60">
            <div className="text-center mb-6">
              <h5 className="text-xl font-semibold">Pro</h5>
              <h2 className="text-4xl font-bold mb-2">KES 1500</h2>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10004;</span>
                Unlimited transactions
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10004;</span>
                Advanced reporting
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10004;</span>
                24/7 phone support
              </li>
            </ul>
            <div className="text-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-up" data-aos-delay="70">
            <div className="text-center mb-6">
              <h5 className="text-xl font-semibold">Enterprise</h5>
              <h2 className="text-4xl font-bold mb-2">KES 5000</h2>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10004;</span>
                Custom solutions
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10004;</span>
                Dedicated account manager
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10004;</span>
                API access
              </li>
            </ul>
            <div className="text-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
