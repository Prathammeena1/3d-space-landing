import React from 'react';
import Hero from '../components/hero';
import Navigation from '../components/navigation';
import Services from '../components/services';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-purple-500 to-indigo-900">
      <Navigation />
      <Hero />
      <Services />
      {/* Showcase components will go here */}
    </div>
  );
};

export default Home;