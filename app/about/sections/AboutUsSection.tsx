import React from 'react'
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <section
      className="bg-[#fff] py-16 px-4 min-h-screen flex items-center justify-center"
      id="about-us"
    >
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">About Transmall Business</h2>
            <div className="space-y-4 text-gray-600 text-sm md:text-base">
              <p className="font-semibold text-lg md:text-xl text-gray-700 text-center">
                Welcome to Transmall Business!
              </p>
              <p>
                At Transmall Business, we believe that data is the key to unlocking success for your business. Our mission is to empower you by providing innovative tools that simplify the collection of business data, enhance stakeholder engagement, and drive meaningful insights.
              </p>
              <p>
                Located at Konza Technopolis in Kenya, we are at the heart of a
                thriving tech community. Our team is passionate about leveraging
                technology to help MSMEs streamline their operations. We offer
                user-friendly solutions to effortlessly collect sales records
                and track all aspects of your business processes.
              </p>
              <p>
                We understand that informed decisions are rooted in accurate
                data. That&apos;s why we are dedicated to equipping you with the
                resources you need to gain a comprehensive understanding of your
                business performance. By enhancing stakeholder engagement
                through data-driven strategies, we aim to foster growth, boost
                efficiency, and support your unique needs.
              </p>
              <p className="font-semibold">
              <Link
                href="/login_signup"
                className="font-semibold text-yellow-400 pr-2"
                // className="font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-2 py-2 rounded-lg text-sm"
              >
                Join 
              </Link>
                 us at Transmall Business and take the first step towards transforming your business insights into actionable strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
