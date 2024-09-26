import React from 'react'
import { FC } from 'react';
import Image from 'next/image';

interface ChallengeCardProps {
  imageSrc: string;
  title: string;
  description: string;
  bgColor: string;
  delay: number;
}

// const ChallengesWeSolveCard: FC<ChallengeCardProps> = ({ imageSrc, bgColor,title, description, delay }) => {
//   return (
//     <div className="block-style-two block-icon-animate flex mb-2 p-6 bg-white shadow-sm rounded-sm" data-aos="fade-up" data-aos-delay={delay}>
//       <div className="icon flex-shrink-0">

//       <Image
//           src={imageSrc}
//           alt={title}
//           width={80}
//           height={80}
//           className={`rounded-full ${bgColor} rounded`}
//         />
//       </div>
//       <div className="text ml-4">
//         <h3 className="title text-xl font-semibold my-2">
//           <a className="text-xl my-2 text-black" href="#">{title}</a>
//         </h3>
//         <p className='text-black'>{description}</p>
//       </div>
//     </div>
//   )
// }

const ChallengesWeSolveCard: FC<ChallengeCardProps> = ({ imageSrc, bgColor, title, description, delay }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center p-6 bg-white rounded-lg mx-4 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 mb-4`} data-aos="fade-up" data-aos-delay={delay}>
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <Image
          src={imageSrc}
          alt={title}
          width={80}
          height={80}
          className={`rounded-full ${bgColor} border-4 border-blue-500 transition-transform duration-300 ease-in-out transform hover:rotate-12`}
        />
      </div>
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          <a href="#" className="hover:text-blue-600 transition-colors duration-300">{title}</a>
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

 
export default ChallengesWeSolveCard


