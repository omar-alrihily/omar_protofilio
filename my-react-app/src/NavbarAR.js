import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from './icons/LOGO.png';
import menuIcon from './icons/burger-menu.png'; // استيراد أيقونة القائمة
import closeIcon from './icons/close-menu.png'// استيراد أيقونة الإغلاق

function NavbarAR() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className="bg-gray-700 text-yellow-500"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            alt="شعارك"
            className="h-16 w-16"
          />
          <h1 className="text-2xl font-semibold ml-2">عمر</h1> {/* استبدل باسمك */}
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-yellow-500 focus:outline-none">
            <img
              src={isMenuOpen ? closeIcon : menuIcon}
              alt={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              className={`h-6 w-6 ${isMenuOpen ? 'absolute top-4 right-4' : ''}`}
            />
          </button>
        </div>
        <nav className={`mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex text-white w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 w-full md:w-auto text-center md:text-left">
            <li>
              <a href="#home" className="hover:text-yellow-500 block py-2">الصفحة الرئيسية</a>
            </li>
            <li>
              
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500 block py-2">من أنا</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-500 block py-2">المشاريع</a>
            </li>
            <li>
              <Link to="/en" className="hover:text-yellow-500 block py-2">التبديل إلى الإنجليزية</Link>
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
          <h1 className="text-4xl font-bold">مرحبًا بك في صفحتي الشخصية</h1>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default NavbarAR;
