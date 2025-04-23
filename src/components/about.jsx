import React from "react";
import { personalDetails, workDetails, eduDetails } from "../details";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import BlurFade from "@/components/magicui/blur-fade";
import { Building, GraduationCap, MapPin, Clock, Briefcase, Medal, BookOpen } from 'lucide-react';

function About() {
  return (
    <main className="container mx-auto max-w-screen-lg py-16 px-4 sm:px-6 lg:px-8 z-10">
      <section className="mb-20">
        <BlurFade delay={0.5} inView>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-white">
            About Me
          </h1>
          
          <div className="flex flex-col md:flex-row gap-10 items-start mb-8">
            <div className="w-full">
              <p className="font-light text-lg leading-relaxed text-gray-200 mb-8">
                {personalDetails.about}
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3 relative z-10 flex items-center">
                    <BookOpen size={20} className="mr-2 text-blue-400" />
                    My Passion
                  </h3>
                  <p className="font-light text-gray-300 leading-relaxed relative z-10">
                    Beyond my professional work, I&apos;m deeply passionate about technology that makes a difference. 
                    I believe in creating solutions that address real-world problems and enhance people&apos;s daily lives.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3 relative z-10 flex items-center">
                    <Medal size={20} className="mr-2 text-blue-400" />
                    Personal Interests
                  </h3>
                  <p className="font-light text-gray-300 leading-relaxed relative z-10">
                    When I&apos;m not coding, you can find me {personalDetails.hobbies || "exploring new technologies, hiking in nature, and enjoying playing games"}. I believe in maintaining a healthy work-life balance to fuel creativity and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      <BlurFade delay={0.7} inView>
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-100">
            Professional Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {workDetails.map((work, index) => (
              <CardSpotlight key={index} className="h-auto min-h-96 w-full p-8 relative">
                <div className="flex flex-col h-full relative z-20">
                  <div className="mb-6 text-center">
                    <Briefcase size={36} className="text-blue-400 mx-auto" />
                  </div>
                  
                  <p className="text-xl font-bold text-white text-center relative z-20">{work.Position}</p>
                  <p className="text-lg font-medium text-blue-400 text-center mb-6 relative z-20">{work.Company}</p>
                  
                  <div className="text-gray-300 mt-auto space-y-3 relative z-20">
                    <p className="text-base flex items-center relative z-20">
                      <MapPin size={16} className="mr-3 text-blue-500 flex-shrink-0" />
                      <span>{work.Location}</span>
                    </p>
                    <p className="text-base flex items-center relative z-20">
                      <Briefcase size={16} className="mr-3 text-blue-500 flex-shrink-0" />
                      <span>{work.Type}</span>
                    </p>
                    <p className="text-base flex items-center relative z-20">
                      <Clock size={16} className="mr-3 text-blue-500 flex-shrink-0" />
                      <span>{work.Duration}</span>
                    </p>
                    
                    {work.description && (
                      <div className="mt-4 pt-4 border-t border-gray-700 relative z-20">
                        <p className="text-sm italic text-gray-400 leading-relaxed">{work.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </section>
      </BlurFade>
      
      <BlurFade delay={0.9} inView>
        <section> 
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-100">
            Academic Background
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {eduDetails.map((edu, index) => (
              <CardSpotlight key={index} className="h-auto min-h-96 w-full p-8 relative">
                <div className="flex flex-col h-full relative z-20">
                  <div className="mb-6 text-center">
                    <GraduationCap size={36} className="text-blue-400 mx-auto" />
                  </div>
                  
                  <p className="text-xl font-bold text-white text-center relative z-20">{edu.Course}</p>
                  <p className="text-lg font-medium text-blue-400 text-center mb-6 relative z-20">{edu.Branch}</p>
                  
                  <div className="text-gray-300 mt-auto space-y-3 relative z-20">
                    <p className="text-base flex items-center relative z-20">
                      <Building size={16} className="mr-3 text-blue-500 flex-shrink-0" />
                      <span>{edu.Institute}</span>
                    </p>
                    <p className="text-base flex items-center relative z-20">
                      <MapPin size={16} className="mr-3 text-blue-500 flex-shrink-0" />
                      <span>{edu.Location}</span>
                    </p>
                    <p className="text-base flex items-center relative z-20">
                      <Clock size={16} className="mr-3 text-blue-500 flex-shrink-0" />
                      <span>{edu.Duration}</span>
                    </p>
                    
                    {edu.achievements && (
                      <div className="mt-4 pt-4 border-t border-gray-700 relative z-20">
                        <p className="text-sm text-gray-400 leading-relaxed">{edu.achievements}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </section>
      </BlurFade>
    </main>
  );
}

export default About;