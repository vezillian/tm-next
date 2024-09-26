import React from 'react'
import Image from 'next/image';

interface WhyChooseUsProps {
  imageSrc: string;
  title: string;
  description: string;
  delay: string;
}

const WhyChooseUsCard: React.FC<WhyChooseUsProps> = ({ imageSrc, title, description, delay }) => {

  return (
    <div className="block-style-two block-icon-animate flex mb-2 p-6 bg-white shadow-sm rounded-sm" data-aos="fade-up" data-aos-delay={delay}>
      <div className="icon flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <div className="text ml-4">
        <h3 className="title text-xl font-semibold my-2">
          <a className="text-xl my-2" href="#">{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
    // <div className="block-style-two block-icon-animate flex mb-8 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" data-aos="fade-up" data-aos-delay={delay}>
    //   <div className="icon">
    //     <Image
    //       src={imageSrc}
    //       alt={title}
    //       width={80}  // You can specify the image size
    //       height={80}  // Provide appropriate width and height
    //       className="rounded-full"
    //     />
    //   </div>
    //   <div className="text ml-4">
    //     <h3 className="title text-xl font-semibold">
    //       <a href="#">{title}</a>
    //     </h3>
    //     <p>{description}</p>
    //   </div>
    // </div>
  )
}

export default WhyChooseUsCard
