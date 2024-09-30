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
    name: "Danson Muchemi",
    position: "Founder & CEO",
    company: "JamboPay",
    image: "/images/test1.jpeg",
    content:
      "Transmall's ERP system has revolutionized our payment processing. Their 24/7 support ensures we're always operational.",
  },
  {
    name: "Agree Ogendo",
    position: "Founder",
    company: "Green Initiative",
    image: "/images/test2.jpeg",
    content:
      "The inventory management module in Transmall's system has helped us reduce waste and optimize our supply chain.",
  },
  {
    name: "Daniel Kimani",
    position: "IT Director",
    company: "The Food and Agriculture Org.",
    image: "/images/test3.jpeg",
    content:
      "Transmall's ERP solution seamlessly integrated with our existing systems, improving our overall operational efficiency.",
  },
  {
    name: "Sarah Muthoni",
    position: "Operations Manager",
    company: "Retail Chain Co.",
    image: "/images/test4.jpeg",
    content:
      "The real-time reporting feature of Transmall's system has been invaluable for making data-driven decisions quickly.",
  },
  {
    name: "John Ochieng",
    position: "Finance Director",
    company: "Tech Solutions Ltd",
    image: "/images/test5.jpeg",
    content:
      "Transmall's ERP has streamlined our financial processes, making audits and compliance a breeze.",
  },
  {
    name: "Felix Ongeri",
    position: "Finance Director",
    company: "Tech Solutions Ltd",
    image: "/images/test6.jpeg",
    content:
      "With Transmall's ERP, managing our sales and inventory has become seamless, giving us real-time insights into our financial operations.",
  },
  {
    name: "David Kihara",
    position: "Finance Director",
    company: "Tech Solutions Ltd",
    image: "/images/test7.jpeg",
    content:
      "Transmall's ERP has improved our stock control and financial reporting, reducing errors and saving time on manual reconciliations.",
  },
  {
    name: "Christine Mwangi",
    position: "Finance Director",
    company: "Tech Solutions Ltd",
    image: "/images/test8.jpeg",
    content:
      "Thanks to Transmall's ERP, we have better control over our cash flow, making it easier to track daily transactions and generate accurate financial reports.",
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
    let visibleTestimonials = [];
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
