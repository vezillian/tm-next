"use client";

import Image from "next/image";
import { FC, useState } from "react";

const Faq: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

      {/* FAQ Section */}
      <section className="pt-28 pb-16 bg-[#0C1433]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <Image
                src="/images/pos2.png"
                alt="POS Image"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {/* Accordion Item 1 */}
                <div
                  className={`border rounded-lg ${
                    activeIndex === 0 ? "bg-gray-700" : "bg-[#0C1433]"
                  }`}
                >
                  <button
                    className="w-full text-left px-4 py-3 flex justify-between items-center text-white"
                    onClick={() => toggleAccordion(0)}
                  >
                    <span className="text-lg font-medium">
                      Why Choose Transmall?
                    </span>
                    <span>
                      {activeIndex === 0 ? (
                        <i className="fas fa-minus"></i>
                      ) : (
                        <i className="fas fa-plus"></i>
                      )}
                    </span>
                  </button>
                  {activeIndex === 0 && (
                    <div className="px-4 py-3 text-white">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                        Offers you the right choices in the world of changing
                        technologies to boost your business sales.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 2 */}
                <div
                  className={`border rounded-lg ${
                    activeIndex === 1 ? "bg-gray-700" : "bg-[#0C1433]"
                  }`}
                >
                  <button
                    className="w-full text-left px-4 py-3 flex justify-between items-center text-white"
                    onClick={() => toggleAccordion(1)}
                  >
                    <span className="text-lg font-medium">
                      Why do I need a POS solution?
                    </span>
                    <span>
                      {activeIndex === 1 ? (
                        <i className="fas fa-minus"></i>
                      ) : (
                        <i className="fas fa-plus"></i>
                      )}
                    </span>
                  </button>
                  {activeIndex === 1 && (
                    <div className="px-4 py-3 text-white">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                        A POS (Point of Sale) solution is essential for a
                        business because it streamlines sales processes, tracks
                        inventory, and enhances customer experience. It allows
                        businesses to efficiently process transactions, manage
                        sales data, and generate real-time reports.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion Item 3 */}
                <div
                  className={`border rounded-lg ${
                    activeIndex === 2 ? "bg-gray-700" : "bg-[#0C1433]"
                  }`}
                >
                  <button
                    className="w-full text-left px-4 py-3 flex justify-between items-center text-white"
                    onClick={() => toggleAccordion(2)}
                  >
                    <span className="text-lg font-medium">
                      What makes us the best option?
                    </span>
                    <span>
                      {activeIndex === 2 ? (
                        <i className="fas fa-minus"></i>
                      ) : (
                        <i className="fas fa-plus"></i>
                      )}
                    </span>
                  </button>
                  {activeIndex === 2 && (
                    <div className="px-4 py-3 text-white">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                        We stand out because we offer reliable, user-friendly
                        solutions tailored to your specific business needs. Our
                        systems ensure smooth transaction processing, real-time
                        inventory management, and comprehensive reporting,
                        helping you run your business efficiently. We prioritize
                        security, seamless integration with other business
                        tools, and excellent customer support, ensuring that
                        your operations are optimized for growth and success.
                      </p>
                    </div>
                  )}
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
