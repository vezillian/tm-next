"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const servicesData = [
  {
    title: "Agriculture",
    description:
      "Manage inventory, sales, and track orders for agricultural supplies with ease.",
    image: "/images/agriculture.jpg",
    link: "/",
  },
  {
    title: "Transport",
    description:
      "Streamline ticket sales and track customer bookings efficiently.",
    image: "/images/transport.jpg",
    link: "/",
  },
  {
    title: "Wholesale",
    description:
      "Manage bulk sales, track stock, and optimize wholesale operations.",
    image: "/images/wholesale.jpg",
    link: "/",
  },
  {
    title: "Finance",
    description:
      "Simplify financial transactions, monitor sales, and track payment histories.",
    image: "/images/finance.jpg",
    link: "/",
  },
  {
    title: "Automotive",
    description:
      "Manage car parts inventory and customer payments effectively.",
    image: "/images/automotive.jpg",
    link: "/",
  },
  {
    title: "Other",
    description:
      "Customizable POS solutions to fit your unique business needs.",
    image: "/images/other.jpg",
    link: "/",
  },
  {
    title: "Automotive",
    description:
      "Manage car parts inventory and customer payments effectively.",
    image: "/images/automotive.jpg",
    link: "/",
  },
  {
    title: "Other",
    description:
      "Customizable POS solutions to fit your unique business needs.",
    image: "/images/other.jpg",
    link: "/",
  },
  {
    title: "Automotive",
    description:
      "Manage car parts inventory and customer payments effectively.",
    image: "/images/automotive.jpg",
    link: "/",
  },
  {
    title: "Other",
    description:
      "Customizable POS solutions to fit your unique business needs.",
    image: "/images/other.jpg",
    link: "/",
  },
  {
    title: "Automotive",
    description:
      "Manage car parts inventory and customer payments effectively.",
    image: "/images/automotive.jpg",
    link: "/",
  },
  {
    title: "Other",
    description:
      "Customizable POS solutions to fit your unique business needs.",
    image: "/images/other.jpg",
    link: "/",
  },
];

// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
//     }, 2000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="pb-8" id="clients">
//       <div className="container mx-auto">
//         <div className="text-center mb-10 mt-10">
//           <span className="text-sm uppercase font-bold tracking-wider text-white">
//             Powerful Features to Grow Your Business
//           </span>
//           <h2 className="text-3xl font-semibold">Who We Serve</h2>
//         </div>

//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
//           >
//             {[...servicesData, ...servicesData.slice(0, 2)].map((service, index) => (
//               <div
//                 key={index}
//                 className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-4"
//               >
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
//                   <a href={service.link}>
//                     <Image
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full object-cover h-60"
//                       width={400}
//                       height={400}
//                     />
//                     <div className="p-5  bg-black bg-opacity-90 mb-0 h-full">
//                       <h4 className="text-lg font-bold mb-2 text-white">{service.title}</h4>
//                       <p className="text-white">{service.description}</p>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 640 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, slidesToShow]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesData.length - slidesToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (servicesData.length - slidesToShow + 1)
    );
  };

  return (
    <section className="pb-8" id="clients">
      <div className="container mx-auto">
        <div className="text-center my-16 px-4">
          <span className="inline-block mb-2 text-sm uppercase font-bold tracking-wider text-indigo-600 bg-indigo-100 px-3 py-2 rounded-full">
            Powerful Features to Grow Your Business
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Who We Serve
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 px-4 ${
                  slidesToShow === 3 ? "sm:w-1/2 md:w-1/3" : ""
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <a href={service.link}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-full object-cover h-60"
                      width={400}
                      height={400}
                    />
                    <div className="p-5 bg-black bg-opacity-90 mb-0 h-full">
                      <h4 className="text-lg sm:text-xl font-extrabold text-white mb-3 leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-white text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
