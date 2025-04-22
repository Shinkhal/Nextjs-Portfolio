"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { projectDetails } from "@/details"; 
import { motion } from "framer-motion";

export function ThreeDCardDemo() {
  const Header = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 mt-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-blue-500 mb-10"
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

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projectDetails.map((project) => (
          <CardContainer key={project.title} className="inter-var">
            <CardBody className="bg-white relative group/card hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-gradient-to-b from-gray-600 to-gray-900 dark:border-gray-800 border-gray-200 w-auto sm:w-full h-auto rounded-xl p-6 border transition-all duration-300">
              {/* Tech badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-xs font-medium py-1 px-2 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
                  {project.techstack.split(',')[0].trim()}
                </span>
              </div>
              
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                {project.title}
              </CardItem>
              
              <CardItem
                as="p"
                translateZ="60"
                className="text-gray-600 text-sm max-w-sm mt-2 dark:text-gray-300 line-clamp-2 h-10"
              >
                {project.description}
              </CardItem>
              
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    height="600"
                    width="600"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-md transition-all duration-500 ease-out transform group-hover/card:scale-105"
                    alt={project.title}
                  />
                </div>
              </CardItem>
              
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                {project.previewLink ? (
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.previewLink}
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-medium text-purple-700 hover:text-purple-800 hover:bg-purple-50 dark:text-purple-400 dark:hover:text-purple-300 dark:hover:bg-purple-900/20 transition-all duration-200"
                  >
                    <span className="flex items-center">
                      <svg 
                        className="w-3 h-3 mr-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      Preview
                    </span>
                  </CardItem>
                ) : (
                  <div className="text-gray-400 dark:text-gray-500 text-xs px-4 py-2">No Preview</div>
                )}
                
                {project.githubLink ? (
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.githubLink}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-black text-white text-xs font-medium transition-colors flex items-center"
                  >
                    <svg 
                      className="w-3 h-3 mr-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </CardItem>
                ) : (
                  <div className="text-gray-400 dark:text-gray-500 text-xs px-4 py-2">No GitHub Link</div>
                )}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}