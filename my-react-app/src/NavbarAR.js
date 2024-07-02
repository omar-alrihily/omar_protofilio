import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from './icons/LOGO.png';

function NavbarAR() {
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
          src={logo}
          alt="شعارك"
          className="h-20 w-20"
        />
        <h1 className="text-4xl font-semibold ml-2">عمر</h1> {/* استبدل باسمك */}
      </div>
      <nav className="mt-4 md:mt-0 text-white">
        <ul className="flex space-x-6">
          <li>
           
          </li>
          <li>
            <a href="#home" className="hover:text-yellow-500">الصفحة الرئيسية</a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500">من أنا</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-500">المشاريع</a>
          </li>
          <li>
            <Link to="/en">التبديل إلى الإنجليزية</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="bg-cover bg-center h-60 md:h-80 flex items-center justify-center" style={{backgroundImage: 'url(omar.jpg)'}}>
      <motion.div 
        className="bg-gray-700 bg-opacity-40 w-full text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.2 }}
      >
        <h1 className="text-6xl font-bold">مرحبًا بك في صفحتي الشخصية</h1>
      </motion.div>
    </div>
  </motion.header>
  )
}

export default NavbarAR