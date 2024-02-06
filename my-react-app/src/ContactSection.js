
import React from 'react';

const ContactSection = () => {
  return (


    
    <div className="mt-8 text-white">
      
      <section id="about" className="bg-gray-800 py-12 text-gray-300 ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold mb-8 text-white relative">
        Contact
         
          <span className="absolute top-10 left-0 h-1 w-36 bg-yellow-500"></span>
        </h2>
        
      <p className="text-lg mb-2">Feel free to reach out to me:</p>
      <ul className="flex space-x-4">
        <li>Email: your.email@example.com</li>
        <li>Phone: +123 456 7890</li>
        <li>LinkedIn: linkedin.com/in/yourusername</li>
        {/* Add more contact information as needed */}
      </ul>
        
       
      </div>
    </section>
    </div>
  );
};

export default ContactSection;
