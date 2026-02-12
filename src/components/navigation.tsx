import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-black p-4">
      <ul className="flex justify-center space-x-4 text-white">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#showcase">Showcase</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;