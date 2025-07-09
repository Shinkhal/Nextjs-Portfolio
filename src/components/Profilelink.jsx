"use client";
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaHackerrank,
  FaStackOverflow,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiCodeforces,
  SiHackerearth,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { profileLinks } from "@/details";
import BlurFade from "@/components/magicui/blur-fade";

const ProfileLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const iconMap = {
    FaGithub,
    FaLinkedin,
    FaBehance,
    FaHackerrank,
    FaStackOverflow,
    SiLeetcode,
    SiGeeksforgeeks,
    SiCodechef,
    SiCodeforces,
    SiHackerearth,
    MdEmail,
  };

  const getBrandColor = (name) => {
    const colors = {
      GitHub: "#181717",
      LinkedIn: "#0A66C2",
      LeetCode: "#FFA116",
      CodeChef: "#5B4638",
      Codeforces: "#1F8ACB",
      HackerRank: "#00EA64",
      GeeksforGeeks: "#0F9D58",
      "Stack Overflow": "#F58025",
      Email: "#EA4335",
      Behance: "#1769FF",
      HackerEarth: "#323754",
    };
    return colors[name] || "#6366F1";
  };

  return (
    <main className=" bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <BlurFade delay={0.7} inView>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Connect with Me
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Explore my journey across various platforms and connect with me on your favorite one!
            </p>
          </div>

          {/* Profile Grid */}
          <div className="relative pb-8">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-30 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-center gap-6 md:gap-10 px-4">
              {profileLinks.map((link, index) => {
                const IconComponent = iconMap[link.icon];
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={link.name}
                    className="relative flex flex-col items-center"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Step Number */}
                    <div className="mb-4">
                      <div className="w-6 h-6 rounded-full bg-gray-700/50 border border-gray-600/50 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-300">{index + 1}</span>
                      </div>
                    </div>

                    {/* Icon and Tooltip */}
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                    >
                      <div
                        className={`w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white shadow-2xl transition-all duration-300 flex items-center justify-center ${
                          isHovered ? "scale-110 shadow-xl" : "scale-100"
                        }`}
                        style={{
                          backgroundColor: getBrandColor(link.name),
                          boxShadow: isHovered
                            ? `0 0 30px ${getBrandColor(link.name)}40`
                            : "0 10px 25px rgba(0,0,0,0.3)",
                        }}
                      >
                        <IconComponent
                          size={isHovered ? 32 : 26}
                          className="text-white transition-all duration-300"
                        />
                      </div>

                      {/* Tooltip */}
                      <div
                        className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        }`}
                      >
                        <div className="px-3 py-2 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-xl">
                          <p className="text-white text-xs font-medium whitespace-nowrap">
                            {link.name}
                          </p>
                          {link.category && (
                            <p className="text-gray-400 text-[10px]">{link.category}</p>
                          )}
                        </div>
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800/90 border-l border-t border-gray-700/50 rotate-45"></div>
                      </div>
                    </a>

                    {/* Connector Line (for desktop) */}
                    <div
                      className={`hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 bg-gradient-to-b opacity-50 transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : ""
                      }`}
                      style={{
                        background: `linear-gradient(to bottom, ${getBrandColor(
                          link.name
                        )}, transparent)`,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>

            {/* End Marker */}
            <div className="flex justify-center mt-12">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"></div>
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  );
};

export default ProfileLinks;
