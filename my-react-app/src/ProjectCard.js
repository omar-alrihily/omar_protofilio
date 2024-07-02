import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { useLanguage } from './LanguageContext'; // استيراد السياق

const ProjectCard = ({ videoSource, title, description, skills }) => {
  const [showDescription, setShowDescription] = useState(false);
  const { language } = useLanguage(); // الحصول على اللغة الحالية من السياق

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  // تحديد النصوص بناءً على اللغة
  const getDescriptionText = () => {
    return language === 'ar' ? 'إخفاء الوصف' : 'Hide Description';
  };

  const getShowDescriptionText = () => {
    return language === 'ar' ? 'عرض الوصف' : 'Show Description';
  };

  return (
    <motion.div
      className="border border-gray-700 bg-gray-800 rounded-lg p-4 shadow-md mx-0 lg:mx-8 text-center"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
    >
      <video
        controls
        className="mx-auto mb-2 rounded-md"
        style={{ width: '100%', height: 'auto' }}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      {showDescription && (
        <div>
          <p className='text-white'>{description}</p>
          <div className="px-6 pt-4 pb-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{skill}
              </span>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={toggleDescription}
        className="text-yellow-500 hover:underline flex items-center font-bold"
      >
        {showDescription ? (
          <>
            <span>{getDescriptionText()}</span>
            <ChevronUpIcon className="w-4 h-4 ml-1" /> {/* Upward arrow icon */}
          </>
        ) : (
          <>
            <span>{getShowDescriptionText()}</span>
            <ChevronDownIcon className="w-4 h-4 ml-1" /> {/* Downward arrow icon */}
          </>
        )}
      </button>
    </motion.div>
  );
};

export default ProjectCard;
