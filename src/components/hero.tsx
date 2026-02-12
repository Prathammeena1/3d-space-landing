import React from 'react';

const Hero = () => {
  return (
    <div ref={heroRef} className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-purple-500 to-indigo-900">
      <header className="text-white text-4xl font-bold mb-10">
        Welcome to 3D Space Landing
      </header>
    </div>
  );
};

export default Hero;