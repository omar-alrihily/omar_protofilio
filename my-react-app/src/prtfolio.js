import React from 'react';
import 'tailwindcss/tailwind.css'; // Include your Tailwind CSS file
import ProjectCard from './ProjectCard';
import Saudicars from './videos/Saudi-Cars.mp4';
import movie from './videos/React App.mp4';
import clip from './videos/clip.mp4';
import freelance_platform from './videos/freelance_platform.mp4'

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-700">
  <section id="projects" className="mb-8 ">
  <h2 className="text-4xl font-bold mb-8 text-white ml-16 mt-4 relative">
         Projects
        <span className="absolute top-10 left-0 h-1 w-32 bg-yellow-500"></span>
         </h2>
    
    <div className="flex justify-center mx-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-12">
        {/* Project cards */}
        <div className="col-span-1 mb-8 lg:mb-0 md:mb-8 lg:col-span-1">
          <ProjectCard
            videoSource={Saudicars}
            title="Car Price Prediction"
            description="A Car Price Prediction Project applies machine learning algorithms to analyze historical car data, enabling accurate estimations of a vehicle's market value based on its features and specifications"
            skills={['React', 'FastApi', 'Machine Learning']}
          />
        </div>
        <div className="col-span-1 mb-8 lg:mb-0 md:mb-8 lg:col-span-1">
          <ProjectCard
            videoSource={movie}
            title="React Movie App"
            description="The React Movie App project utilizes React.js to create an interactive platform for browsing, searching,
            and displaying movie information, integrating APIs to fetch and showcase details like ratings, reviews, and
            trailers in a user-friendly interface"
            skills={['React', 'RestFull Api', 'Tailwind']}
          />
        </div>
        <div className="col-span-1 mb-8 lg:mb-0 md:mb-8 lg:col-span-1">
          <ProjectCard
            videoSource={clip}
            title="Surveys App"
            description="App for creating customizable forms for various purposes and Easily design surveys"
            skills={['Vue.js', 'Vuetify', 'JS']}
          />
        </div>
        <div className="col-span-1 mb-8 lg:mb-0 md:mb-8 lg:col-span-1">
          <ProjectCard
            videoSource={freelance_platform}
            title="Freelance Platform"
            description="Freelance Platform Streamlined collaboration for freelancers and clients. Showcase skills, manage projects, and connect seamlessly"
            skills={['React', 'Node.js', 'MongoDB']}
          />
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  </section>
</div>


  );
};

export default Portfolio;
