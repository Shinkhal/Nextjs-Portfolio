"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaBehance, FaHackerrank, FaStackOverflow } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { profileLinks } from "@/details";  
import { CardSpotlight } from "@/components/ui/card-spotlight";

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
    <main className='container mx-auto max-w-screen-xl pb-20 m-10'>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-red-400 font-bold mb-8 text-center">
        You Can Find Me On
      </h1>
      <div className="p-6 rounded-lg ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profileLinks.map((link) => {
            const IconComponent = iconMap[link.icon];

            return (
              <CardSpotlight key={link.name}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2 transition-transform transform hover:scale-105"
                >
                  <div className="bg-gray-900 p-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                    <IconComponent size={30} />
                  </div>
                  <span className="text-lg text-red-400 hover:underline">{link.name}</span>
                </a>
              </CardSpotlight>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ProfileLinks;
