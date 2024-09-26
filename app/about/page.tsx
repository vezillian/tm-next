import React from 'react';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import ChallengesWeSolveSection from './sections/ChallengesWeSolveSection';
import AboutUsSection from './sections/AboutUsSection';
import HeroSection from './sections/HeroSection';

const About: React.FC = () => {

  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <ChallengesWeSolveSection />
    </>
  );
};

export default About;
