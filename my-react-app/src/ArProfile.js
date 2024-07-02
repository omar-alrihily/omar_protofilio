import React from 'react';
import 'tailwindcss/tailwind.css'; // Include your Tailwind CSS file
import ProjectCard from './ProjectCard';
import Saudicars from './videos/Saudi-Cars.mp4';
import movie from './videos/React App.mp4';
import clip from './videos/clip.mp4';
import freelance_platform from './videos/freelance_platform.mp4';


function ArProfile() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-700">
      <section id="projects" className="mb-8 ">
        <h2 className="text-4xl font-bold mb-8 text-white ml-16 mt-4 mr-20 relative">
          المشاريع
          <span className="absolute top-12 right-0 h-1 w-32 bg-yellow-500"></span>
        </h2>
        
        <div className="flex justify-center mx-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-12">
            {/* بطاقات المشاريع */}
            <div className="col-span-1 mb-8 lg:mb-0 md:mb-8 lg:col-span-1">
              <ProjectCard
                videoSource={Saudicars}
                title="توقع أسعار السيارات"
                description="يستحدم مشروع توقع أسعار السيارات خوارزميات التعلم الآلي لتحليل البيانات التاريخية للسيارات، مما يمكننا من تقديرات دقيقة لقيمة السوق للمركبة بناءً على ميزاتها ومواصفاتها"
                skills={['React', 'FastApi', 'Machine Learning']}
              />
            </div>
            <div className="col-span-1 mb-8 lg:mb-0 md:mb-8 lg:col-span-1">
              <ProjectCard
                videoSource={movie}
                title="تطبيق أفلام React"
                description="يستخدم مشروع تطبيق الأفلام React.js لإنشاء منصة تفاعلية لتصفح الأفلام والبحث عنها وعرض معلومات الأفلام، مع دمج واجهات برمجة التطبيقات لجلب وعرض تفاصيل مثل التقييمات والمراجعات والمقاطع الدعائية بواجهة مستخدم سهلة الاستخدام"
                skills={['React', 'RestFull Api', 'Tailwind']}
              />
            </div>
            <div className="col-span-1 mb-8 lg:mb-0 md:mb-8 lg:col-span-1">
              <ProjectCard
                videoSource={clip}
                title="تطبيق الاستطلاعات"
                description="تطبيق لإنشاء نماذج مخصصة لأغراض مختلفة وتصميم الاستطلاعات بسهولة"
                skills={['Vue.js', 'Vuetify', 'JS']}
              />
            </div>
            <div className="col-span-1 mb-8 lg:mb-0 md:mb-8 lg:col-span-1">
              <ProjectCard
                videoSource={freelance_platform}
                title="منصة العمل الحر"
                description="منصة العمل الحر تسهل التعاون بين المستقلين والعملاء. عرض المهارات وإدارة المشاريع والتواصل بسهولة"
                skills={['React', 'Node.js', 'MongoDB']}
              />
            </div>
            {/* أضف المزيد من بطاقات المشاريع إذا لزم الأمر */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArProfile