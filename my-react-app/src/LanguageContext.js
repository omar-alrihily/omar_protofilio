// src/LanguageContext.js
import React, { createContext, useContext, useState } from 'react';

// إنشاء سياق للغة
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar'); // 'ar' للعربية و'en' للإنجليزية

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'ar' ? 'en' : 'ar'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// استخدم هذا للوصول إلى السياق في مكوناتك
export const useLanguage = () => useContext(LanguageContext);
