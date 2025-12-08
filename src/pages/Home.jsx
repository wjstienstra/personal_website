import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About'; // The Timeline
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
    </>
  );
}

export default Home;