"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
import Testimonial from '../components/Testimonial';

const accordionData = [
  {
    question: "What is ERP and how can it benefit my business?",
    answer:
      "ERP is a short form for enterprise resource planning and is a type of software that integrates various business processes into one system. It helps streamline operations, improve efficiency, and enhance data accuracy.",
  },
  {
    question: "What is a POS system, and how does it work?",
    answer:
      "A POS (point of sale) system is a technology used to manage sales transactions. It typically includes hardware (like registers and card readers) and software to manage sales, inventory, and customer data.",
  },
  {
    question: "Who are your target customers?",
    answer:
      "Our solutions are specifically designed for micro, small, and medium enterprises (MSMEs) across various sectors in Kenya, including but not limited to retail, fashion, hospitality, and manufacturing.",
  },
  {
    question: "What features are included in your ERP solution?",
    answer:
      "Our ERP solution includes modules for inventory management, finance, sales, customer relationship management (CRM), human resources, and reporting/analytics.",
  },
  {
    question: "What capabilities does your POS system offer?",
    answer:
      "Our POS system includes features like sales tracking, inventory management, customer management, multi-payment options, multi-store management, credit-tracking, and real-time reporting.",
  },
  {
    question: "Is your software customisable?",
    answer:
      "Yes, our ERP and POS solutions can be customised to meet the specific needs of your business.",
  },
  {
    question: "How long does it take to implement your ERP and POS solutions?",
    answer:
      "Implementation time varies based on the complexity of your business processes but typically ranges from a few hours to a couple of days.",
  },
  {
    question: "Do you provide training for my staff?",
    answer:
      "Yes, we offer comprehensive training for your staff to ensure they can effectively use both the ERP and POS systems.",
  },
  {
    question: "What support do you offer after implementation?",
    answer:
      "We provide ongoing technical support, software updates, and customer service to address any issues that may arise.",
  },
  {
    question: "How is your pricing structured?",
    answer:
      "Our pricing is based on the specific modules selected, the size of your business, and the desired level of support. We offer flexible payment plans, including a free package to get you started.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No, we pride ourselves on transparency and will provide a clear quotation with all associated costs upfront.",
  },
  {
    question: "How secure is your software?",
    answer:
      "Our solutions are designed with robust security measures, including data encryption, user access controls, and regular security updates.",
  },
  {
    question: "How do you handle data privacy?",
    answer:
      "We're licensed by the ODPC as a data controller and comply with local and international data protection regulations, prioritising the security of your business data.",
  },
  {
    question: "Can your ERP and POS systems integrate with other software?",
    answer:
      "Yes, our solutions can integrate with other business tools and software that you may be using, such as e-commerce platforms and third-party applications.",
  },
  {
    question: "Is your software cloud-based?",
    answer:
      "Yes, our ERP and POS solutions are available in cloud-based formats, allowing for remote access and easier maintenance.",
  },
  {
    question: "Do you offer a demo of your software?",
    answer:
      "Yes, we offer demos and trial periods to help you evaluate our software before making a commitment.",
  },
  {
    question: "Can I upgrade my plan or modules later?",
    answer:
      "Absolutely! Our solutions are designed to grow with your business, allowing for upgrades as needed.",
  },
  {
    question: "What industries do you cater to?",
    answer:
      "We cater to various industries, including retail, fashion, hospitality, manufacturing, and more.",
  },
];

const Faq: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const totalPages = Math.ceil(accordionData.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
    setActiveIndex(null);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
    setActiveIndex(null);
  };

  const currentItems = accordionData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      {/* CTA Section */}
      <section className="bg-[#150A5C] pt-24 pb-16 relative">
        <div className="absolute top-0 left-0">
          <span className="block" style={{ transform: "translateZ(0)" }}>
            <Image
              src="/images/shape-4.png"
              alt="shape"
              width={150}
              height={150}
              className="w-auto"
            />
          </span>
        </div>
        <div className="absolute top-0 right-0">
          <span className="block" style={{ transform: "translateZ(0)" }}>
            <Image
              src="/images/shape-5.png"
              alt="shape"
              width={150}
              height={150}
              className="w-auto"
            />
          </span>
        </div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-2/3 text-white mb-10 lg:mb-0">
              <h2 className="text-4xl font-bold">
                Ready to Transform Your Business?
              </h2>
              <h5 className="text-lg">
                Join thousands of satisfied customers who have streamlined their
                operations with our POS ERP solution.
              </h5>
            </div>
            <div className="lg:w-1/3">
              <a
                href="/login_signup"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      {/* FAQ Section */}
      <section className="pt-4 pb-16 bg-[#192966]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <Image
                src="/images/pos2.png"
                alt="POS Image"
                width={500}
                height={400}
                className="rounded-lg w-full xl:w-auto xl:max-w-[500px] lg:max-w-[400px]"
              />
            </div>

            <div className="lg:w-1/2 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {currentItems.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg ${
                      activeIndex === index ? "bg-gray-700" : "bg-[#0C1433]"
                    }`}
                  >
                    <button
                      className="w-full text-left px-4 py-3 flex justify-between items-center text-white"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="text-lg font-medium">
                        {item.question}
                      </span>
                      <span>
                        {activeIndex === index ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </span>
                    </button>
                    {activeIndex === index && (
                      <div className="px-4 py-3 text-white">
                        <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-white">
                    Page {currentPage + 1} of {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages - 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
