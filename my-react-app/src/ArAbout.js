import React from 'react';
import programmingLogo from './icons/programing_logo.png'; // Correct the spelling of 'programming'
import JavaScriptLogo from './icons/JS.png';
import reactLogo from './icons/React.png'
import NodeJsLogo from './icons/nod js.png';
import PythonLogo from './icons/Python.png';
import { motion } from 'framer-motion';
import CVSection from './CVSection';

const ArAbout = () => {
  return (
    <section id="about" className="bg-gray-800 py-12 text-gray-300 ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold mb-8 text-white relative ">
                  عني       
          <motion.img
              src={programmingLogo}
              alt="شعار البرمجة"
              className="w-12 h-12 absolute top-0 right-24" // Adjust width, height, and positioning
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          <span className="absolute top-12 right-0 h-1 w-36 bg-yellow-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <p className="text-lg mb-4">
              مرحبًا! أنا <span className='text-yellow-500 font-bold'>عمر الرحيلي</span>، مطور <span className='text-yellow-500 font-bold'>FullStack</span> استمتع بتحويل الأفكار إلى واقع باستخدام أحدث التقنيات البرمجية. لنقم ببناء شيء رائع معًا!
            </p>
            
            <p className="text-lg">
              أنا متخصص في إنشاء <span className='text-yellow-500 font-bold'>مواقع الإنترنت وتطبيقات التعلم الآلي</span>. أحب استكشاف التقنيات الجديدة والتوصل إلى حلول مبتكرة.
            </p>
            <CVSection/>
          </div>
          <div className='relative'>
            <ul className="grid grid-cols-4 gap-1 w-full">
              <motion.img
                src={JavaScriptLogo}
                alt="شعار JavaScript"
                className="w-26 h-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <li className="text-lg ml-6">
                <div>
                  <motion.img
                    src={reactLogo}
                    alt="شعار React"
                    className="w-26 h-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </div>
              </li>
              <li className="text-lg">
                <div>
                  <motion.img
                    src={NodeJsLogo}
                    alt="شعار Node.js"
                    className="w-26 h-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </div>
              </li>
              <li className="text-lg">
                <div>
                  <motion.img
                    src={PythonLogo}
                    alt="شعار Python"
                    className="w-26 h-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </div>
              </li>
              {/* Add more skills */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArAbout;
