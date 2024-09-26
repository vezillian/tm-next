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

const ChallengesWeSolveCard: FC<ChallengeCardProps> = ({ imageSrc, bgColor,title, description, delay }) => {
  return (
    <div className="block-style-two block-icon-animate flex mb-2 p-6 bg-white shadow-sm rounded-sm" data-aos="fade-up" data-aos-delay={delay}>
      <div className="icon flex-shrink-0">

      <Image
          src={imageSrc}
          alt={title}
          width={80}
          height={80}
          className={`rounded-full ${bgColor} rounded`}
        />
      </div>
      <div className="text ml-4">
        <h3 className="title text-xl font-semibold my-2">
          <a className="text-xl my-2" href="#">{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
 
export default ChallengesWeSolveCard


