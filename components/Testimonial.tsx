import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily R.",
    position: "CEO",
    company: "Tech Innovations",
    image: "/images/test1.jpg",
    content:
      "Transmall Business has transformed the way we gather and analyze data. Their AI-driven tools are incredibly intuitive and have provided us with insights that were previously hidden. Our decision-making process is now faster and more informed, leading to a significant boost in our overall productivity. Highly recommended!",
  },
  {
    name: "James T.",
    position: "Marketing Director",
    company: "Green Solutions",
    image: "/images/test4.jpg",
    content:
      "As a marketing professional, I rely heavily on data to drive our strategies. Transmall's platform has been a game-changer for us. The ease of collecting business data and the depth of insights we can extract is phenomenal. We've seen a measurable improvement in our campaign performance since implementing their solutions.",
  },
  {
    name: "Samantha L.",
    position: "Operations Manager",
    company: "Retail World",
    image: "/images/test2.jpg",
    content:
      "I can't praise Transmall Business enough! Their data collection tools are not only powerful but also user-friendly. The insights we've gained have allowed us to streamline operations and improve customer satisfaction dramatically. We've finally got a handle on our data, and it's all thanks to Transmall!",
  },
  {
    name: "Michael H.",
    position: "Founder",
    company: "StartSmart Solutions",
    image: "/images/test5.jpg",
    content:
      "Transmall Business has been a vital partner in our growth journey. Their AI-driven insights have helped us identify key trends in our industry, leading to strategic opportunities that we would have otherwise missed. The support team is fantastic; they ensure we get the most out of their tools.",
  },
  {
    name: "Lisa K.",
    position: "CFO",
    company: "FinanceWise",
    image: "/images/test3.jpg",
    content:
      "Working with Transmall Business has been one of the best decisions we've made. The data-driven insights have not only improved our financial forecasting but also helped us make data-led decisions that align with our business goals. Their tools are innovative, and the results speak for themselves!",
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visibleCount = 3;
    const visibleTestimonials = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleTestimonials.push(testimonials[index]);
    }
    return visibleTestimonials;
  };

  return (
    <section className="bg-[#192966] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <span className="inline-block mb-2 text-sm capitalize font-bold tracking-wider text-indigo-600 bg-indigo-100 px-3 py-2 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What our clients say about us
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-[#0C1433] rounded-lg shadow-lg p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h5 className="font-semibold text-white text-lg">
                          {testimonial.name}
                        </h5>
                        <p className="text-sm text-white">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-white flex-grow">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-[#192966]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-[#192966]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
