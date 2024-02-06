import React from 'react';
import programmingLogo from './icons/programing_logo.png'; // Correct the spelling of 'programming'
import JavaSecriptLogo from './icons/JS.png'
import reactLogo from './icons/React.png'
import NodeJs from './icons/nod js.png'
import PyhonLogofrom from './icons/Python.png'
import { motion } from 'framer-motion';
import CVSection from './CVSection';


const About = () => {
  return (
    <section id="about" className="bg-gray-800 py-12 text-gray-300 ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold mb-8 text-white relative">
          About Me
          <motion.img
              src={programmingLogo}
              alt="Programming Logo"
              className="w-12 h-12 absolute top-0 left-40" // Adjust width, height, and positioning
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          <span className="absolute top-10 left-0 h-1 w-36 bg-yellow-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <p className="text-lg mb-4">
              Hi there! I'm <span className='text-yellow-500 font-bold'>Omar ALRehili</span>, a creative <span className='text-yellow-500 font-bold'>FullStack Developer</span> who enjoys turning ideas into reality using code.
              Let's build something incredible together!
            </p>
            
            <p className="text-lg">
            I specialize in creating <span className='text-yellow-500 font-bold'> Websites and Machine Learning Applications</span> . I love exploring new technologies and coming up with innovative solutions.
            </p>
            <CVSection/>

            
          </div>
          <div className='relative'>
          
            
           
            <ul className="grid grid-cols-4 gap-1 w-full" >
            <motion.img
                  src={JavaSecriptLogo}
                  alt="JavaScript Logo"
                  className="w-26 h-20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              <li className="text-lg ml-6"> <div><motion.img
              src={reactLogo}
              alt="Programming Logo"
              className="w-26 h-20 " // Adjust width, height, and positioning
              whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
             </div></li>
              <li className="text-lg"><div><motion.img
              src={NodeJs}
              alt="Programming Logo"
              className="w-26 h-20 " // Adjust width, height, and positioning
              whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            /></div></li>
            <li className="text-lg"><div><motion.img
    src={PyhonLogofrom}
    alt="Programming Logo"
    className="w-26 h-20"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
/></div></li>
              {/* Add more skills */}
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
