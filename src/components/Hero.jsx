"use client";
import React, { useState } from "react";
import HyperText from "@/components/magicui/hyper-text";

function HeroSection() {
  const [roles] = useState([
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Coder",
    "Graphic Designer",
  ]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  React.useEffect(() => {
    const roleChangeInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(roleChangeInterval);
  }, [roles.length]);

  return (
    <main className="container mx-auto max-w-screen-xl md:flex flex flex-col justify-center items-center px-4 pb-20 mt-20 text-center">
      <div className="z-10">
        <h3 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold mt-4 font-montserrat">
          Hey, I&apos;m
        </h3>
        <HyperText
          className="bg-clip-text bg-gradient-to-r from-red-900 to-text-black-500 text-transparent font-bold"
          text="Shinkhal Sinha"
        />
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold mt-4 font-montserrat">
          <p>A</p>
          <span className="text-cyan-400"> 
            {roles[currentRoleIndex]}
          </span>
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href="/shinkhal_sinha_cv.pdf"
            download="shinkhal_sinha_cv.pdf"
            className="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;