"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  title: string;
  image: string;
  description: string;
  techstack: string;
  previewLink?: string;
  githubLink: string;
}

export const ProjectShowcase = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black py-20">
      <Header />
      <ProjectGrid projects={projects} />
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Project Portfolio
      </motion.h1>
      <motion.p 
        className="max-w-2xl text-base md:text-lg text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        This collection highlights some of my most exciting and innovative work, spanning web development 
        and full-stack applications. Each project reflects my passion for creating impactful solutions 
        using the latest technologies.
      </motion.p>
    </div>
  );
};

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title}
            project={project}
            index={index}
            setHoveredId={setHoveredId}
            isHovered={hoveredId === project.title}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ 
  project, 
  index, 
  setHoveredId, 
  isHovered 
}: { 
  project: Project; 
  index: number;
  setHoveredId: (id: string | null) => void;
  isHovered: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setHoveredId(project.title)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          fill
          className="object-cover transform transition-transform duration-700 hover:scale-110"
          alt={project.title}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-60'}`} />
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-1">{project.title}</h2>
          <p className="text-sm font-medium text-gray-200 truncate">{project.techstack}</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="p-4"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>
          
          {project.previewLink && (
            <a 
              href={project.previewLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};