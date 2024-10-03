"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const servicesData = [
  {
    title: "Agriculture",
    description:
      "Improve farming operations with real-time inventory tracking and automated reordering.",
    image: "/images/agriculture.jpg",
    link: "/",
  },
  {
    title: "Transport",
    description:
      "Optimize logistics and fleet management with real-time inventory visibility and automated reordering.",
    image: "/images/transport.jpg",
    link: "/",
  },
  {
    title: "Wholesale",
    description:
      "Gain insights into your best-selling products and peak hours to drive business growth.",
    image: "/images/wholesale.jpg",
    link: "/",
  },
  {
    title: "Finance",
    description:
      "Build comprehensive customer profiles and track purchasing history to improve financial decision-making.",
    image: "/images/finance.jpg",
    link: "/",
  },
  {
    title: "Automotive",
    description:
      "Streamline inventory management and enhance customer experiences in the automotive industry.",
    image: "/images/automotive.jpg",
    link: "/",
  },
  {
    title: "Services",
    description:
      "Optimize service delivery and enhance customer relationships with data-driven insights.",
    image: "/images/services.jpg",
    link: "/",
  },
  {
    title: "Education",
    description:
      "Improve educational resource planning and student experiences with data-driven decision-making.",
    image: "/images/education.jpg",
    link: "/",
  },
  {
    title: "Food & Beverage",
    description:
      "Enhance supply chain efficiency and customer satisfaction in the food and beverage industry.",
    image: "/images/food.jpg",
    link: "/",
  },
  {
    title: "Manufacturing",
    description:
      "Streamline production processes and inventory management for improved operational efficiency.",
    image: "/images/manufacturing.jpg",
    link: "/",
  },
  {
    title: "Technology",
    description:
      "Leverage data insights to drive innovation and improve customer experiences in the tech industry.",
    image: "/images/technology.jpg",
    link: "/",
  },
  {
    title: "Construction & Real Estate",
    description:
      "Optimize project management and enhance customer relationships in the construction and real estate sectors.",
    image: "/images/real-estate.jpg",
    link: "/",
  },
  {
    title: "Retail",
    description:
      "Build comprehensive customer profiles and track purchasing history to improve retail operations.",
    image: "/images/retail.jpg",
    link: "/",
  },
  {
    title: "Healthcare",
    description:
      "Enhance patient care and operational efficiency in the healthcare industry with data-driven insights.",
    image: "/images/healthcare.jpg",
    link: "/",
  },
  {
    title: "Hospitality",
    description:
      "Improve guest experiences and optimize operations in the hospitality industry.",
    image: "/images/hospitality.jpg",
    link: "/",
  },
  {
    title: "Other",
    description:
      "Leverage data-driven insights to improve operations and customer experiences across various industries.",
    image: "/images/other.jpg",
    link: "/",
  },
];

// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [slidesToShow, setSlidesToShow] = useState(3);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [currentIndex, slidesToShow]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? servicesData.length - slidesToShow : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex + 1) % (servicesData.length - slidesToShow + 1)
//     );
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setSlidesToShow(window.innerWidth < 640 ? 1 : 3);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, [handleNext]);

//   return (
//     <section className="pb-8" id="clients">
//       <div className="container mx-auto">
//         <div className="text-center my-16 px-4">
//           <span className="inline-block mb-2 text-sm font-normal tracking-wider text-indigo-600 bg-indigo-100 px-3 py-2 rounded-full">
//             Powerful Features to Grow Your Business
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
//             Who We Serve
//           </h2>
//         </div>

//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
//             }}
//           >
//             {servicesData.map((service, index) => (
//               <div
//                 key={index}
//                 className={`w-full flex-shrink-0 px-4 ${
//                   slidesToShow === 3 ? "sm:w-1/2 md:w-1/3" : ""
//                 }`}
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
//                     <div className="p-5 bg-[#0C1433] mb-0 h-full">
//                       <h4 className="text-lg sm:text-xl font-extrabold text-white mb-3 leading-snug">
//                         {service.title}
//                       </h4>
//                       <p className="text-white text-sm sm:text-base leading-relaxed">
//                         {service.description}
//                       </p>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={handlePrev}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
//           >
//             <ChevronLeft className="w-6 h-6 text-black" />
//           </button>

//           <button
//             onClick={handleNext}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
//           >
//             <ChevronRight className="w-6 h-6 text-black" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const timer = setInterval(handleNext, 4000);
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

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 640 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pb-8" id="clients">
      <div className="container mx-auto">
        <div className="text-center my-16 px-4">
          <span className="inline-block mb-2 text-sm font-normal tracking-wider text-indigo-600 bg-indigo-100 px-3 py-2 rounded-full">
            Powerful Features to Grow Your Business
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4">
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
                  <a
                    href={service.link}
                    className="block relative aspect-[4/3]"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      loading={index < 6 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0xLyYyUD48LSU4RjBKVVY3RE5MOE1hPVFXX2JdOElmbklIi19yXmduX2n/2wBDARUXFygdIR4hNTU1aEQ8RGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGn/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </a>
                  <div className="p-5 bg-[#0C1433] mb-0 h-full">
                    <h4 className="text-lg sm:text-xl font-extrabold text-white mb-3 leading-snug">
                      {service.title}
                    </h4>
                    <p className="text-white text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
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
