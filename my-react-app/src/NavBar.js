import React from 'react';
import { motion } from 'framer-motion';
import logo from './icons/LOGO.png'

const NavBar = () => {
  return (
    <motion.header 
      className="bg-gray-700 text-yellow-500"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-6 px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center">
          <img
            src={logo} // Replace with your logo image
            alt="Your Logo"
            className="h-20 w-20"
          />
          <h1 className="text-4xl font-semibold ml-2 ">OMAR</h1> {/* Replace with your name */}
        </div>
        <nav className="mt-4 md:mt-0 text-white">
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-yellow-500">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-500">Projects</a>
            </li>
            
          </ul>
        </nav>
      </div>
      <div className="bg-cover bg-center h-60 md:h-80 flex items-center justify-center" style={{backgroundImage: 'url(omar.jpg)'}}>
        {/* Replace 'your_hero_image.jpg' with your hero image */}
        <motion.div 
        className="bg-gray-700 bg-opacity-40 w-full text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.2 }}
      >
        <h1 className="text-6xl font-bold">Welcome to my Portfolio</h1>
      </motion.div>
      </div>
    </motion.header>
  );
};

export default NavBar;
