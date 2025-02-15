"use client";
import React, { useEffect, useState } from "react";
import HyperText from "@/components/magicui/hyper-text";

const roles = [
  "Web Developer",
  "Mobile Developer",
  "UI/UX Designer",
  "Coder",
  "Graphic Designer",
];

function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const roleChangeInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); 

    return () => clearInterval(roleChangeInterval);
  }, []);

  return (
    <main className="container mx-auto max-w-screen-xl flex flex-col justify-center items-center px-4 pb-20 mt-20 text-center">
      <div className="z-10">
        <h3 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold mt-4 font-montserrat">
          Hey, I&apos;m
        </h3>
        <HyperText
          className="bg-clip-text bg-gradient-to-r from-orange-800 to-red-600 text-transparent font-bold"
          text="Shinkhal Sinha"
        />
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold mt-4 font-montserrat">
          <span className="text-cyan-400 transition-opacity duration-500 ease-in-out">
            {roles[currentRoleIndex]}
          </span>
        </h2>
        <div className="mt-8 flex justify-center">
        <a
  href="/api/download-cv"
  aria-label="Download CV of Shinkhal Sinha"
  className="cursor-pointer flex items-center bg-gray-800 px-4 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 transition-all duration-500 hover:ring-1 font-mono w-[160px]"
>
  Download CV
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-5 h-5 ml-2 animate-bounce"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    />
  </svg>
</a>

        </div>
      </div>
    </main>
  );
}

export default HeroSection;
