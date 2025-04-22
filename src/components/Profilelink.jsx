"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaBehance, FaHackerrank, FaStackOverflow } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { profileLinks } from "@/details";  
import { CardSpotlight } from "@/components/ui/card-spotlight";
import BlurFade from "@/components/magicui/blur-fade";

const ProfileLinks = () => {
  const iconMap = {
    FaGithub,
    FaLinkedin,
    FaBehance,
    FaHackerrank,
    FaStackOverflow,
    SiLeetcode,
    SiGeeksforgeeks,
    MdEmail,
  };

  return (
    <main className='container mx-auto max-w-screen-xl py-16 px-4 sm:px-6 lg:px-8 z-10'>
      <BlurFade delay={0.5} inView>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-gray-100 text-center">
          You Can Find Me On
        </h2>
        
        <div className="p-6 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {profileLinks.map((link) => {
              const IconComponent = iconMap[link.icon];

              return (
                <CardSpotlight key={link.name} className="p-6 relative">
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center h-full space-y-4 relative z-20"
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 rounded-full shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 relative z-30">
                      <IconComponent size={36} className="text-blue-400" />
                    </div>
                    <span className="text-lg font-medium text-gray-200 group-hover:text-blue-400 transition-colors relative z-20">
                      {link.name}
                    </span>
                    
                  </a>
                </CardSpotlight>
              );
            })}
          </div>
        </div>
      </BlurFade>
    </main>
  );
};

export default ProfileLinks;