import React from 'react'
import Image from 'next/image';

interface WhyChooseUsProps {
  imageSrc: string;
  title: string;
  description: string;
  delay: string;
}

const WhyChooseUsCard: React.FC<WhyChooseUsProps> = ({ imageSrc, title, description }) => {
  return (
    <div 
      className="flex flex-col md:flex-row mx-4 items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <Image
          src={imageSrc}
          alt={title}
          width={80}
          height={80}
          className="rounded-full border-4 border-blue-500 transition-transform duration-300 ease-in-out transform hover:rotate-12"
        />
      </div>
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">
          <a href="#" className="hover:text-blue-600 transition-colors duration-300">{title}</a>
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};


export default WhyChooseUsCard
