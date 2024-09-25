import React from 'react';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import ChallengesWeSolveSection from './sections/ChallengesWeSolveSection';

const About: React.FC = () => {

  const services = [
    {
      title: "All-in-One Solution",
      description: "Integrated POS and ERP platform consolidates your sales tracking, inventory management, and financial reporting into one seamless experience.",
      imageSrc: "image/all.png",
      delay: "30",
    },
    {
      title: "Revenue Collection Agencies' Integration",
      description: "Stay compliant with local tax regulations effortlessly, ensuring your business remains compliant while minimizing tax-related stress and maximizing revenue collection.",
      imageSrc: "image/kra.jpeg",
      delay: "40",
    },
    {
      title: "Effortless Invoice Sharing",
      description: "Share invoices and receipts with ease! With just a click, send them via SMS, WhatsApp, or email—making it convenient for you and your customers.",
      imageSrc: "image/invoice.jpeg",
      delay: "50",
    },
    {
      title: "Fast and Accurate Transactions",
      description: "Enhance customer satisfaction with speedy checkouts, equipped with advanced barcode reading technology. Reduce errors and provide a smooth shopping experience that keeps your customers coming back.",
      imageSrc: "image/transactions.jpeg",
      delay: "60",
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Keep track of your customers effortlessly! Our system enables you to manage customer interactions and relationships, fostering long-term engagement and loyalty.",
      imageSrc: "image/crm.webp",
      delay: "60",
    },
    {
      title: "Credit Tracking",
      description: "Easily monitor credit extended to your customers! Our system allows you to keep a close eye on customer credit accounts, helping you manage receivables effectively and improve cash flow.",
      imageSrc: "image/ct.png",
      delay: "60",
    },
  ];


  return (
    <>
      <section className="hero-area">
        <div className="bg-blue-900 text-white py-20">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="shape shape-one scene"><span data-depth="2"></span></div>
              <div className="shape shape-two scene"><span data-depth="3"></span></div>
              <div className="shape shape-three scene"><span data-depth="4"></span></div>
              <div className="shape shape-four scene"><span data-depth=".1"></span></div>
            </div>
            <div className="container mx-auto">
              <div className="flex justify-center">
                <div className="w-full max-w-2xl text-center">
                  <h1 className="text-4xl font-bold">About Us</h1>
                  <ul className="flex justify-center space-x-4 mt-4">
                    <li><a href="index.html" className="text-white">Home</a></li>
                    <li className="font-bold text-white">About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <ChallengesWeSolveSection />
      
    </>
  );
};

export default About;
