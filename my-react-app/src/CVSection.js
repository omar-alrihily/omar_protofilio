// src/CVSection.js
import React from 'react';
import { useLanguage } from './LanguageContext'; // استيراد السياق

const CVSection = () => {
  const { language } = useLanguage(); // الحصول على اللغة الحالية من السياق

  const handleOpenCV = () => {
    window.open("https://omar-cv.tiiny.site", "_blank");
  };

  // تحديد النصوص بناءً على اللغة
  const getButtonText = () => {
    return language === 'ar' ? 'عرض/تنزيل سيرتي الذاتية' : 'View/Download my CV';
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md text-white">
      {/* إضافة زر لفتح ملف السيرة الذاتية في نافذة جديدة */}
      <button
        onClick={handleOpenCV}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        {getButtonText()}
      </button>
    </div>
  );
};

export default CVSection;

