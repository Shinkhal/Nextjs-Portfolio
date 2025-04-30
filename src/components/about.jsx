import React from "react";
import Image from "next/image";
import { personalDetails, workDetails, eduDetails } from "../details";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import BlurFade from "@/components/magicui/blur-fade";
import { Building, GraduationCap, MapPin, Clock, Briefcase, Medal, BookOpen, Trophy, Star, Code, HeartHandshake} from 'lucide-react';

// Example achievements - you can move these to your details file later
const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon Finalist",
    description: "Ranked among the top 50 teams in college for Smart India Hackathon 2024 with the Farmease app aimed at connecting farmers to consumers and retailers.",
    icon: Trophy,
    year: "2024",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10"
  },
  {
    id: 2,
    title: "Open Source Contributor",
    description: "Contributed pull requests to 2–3 Apache GitHub repositories, actively supporting open-source development and collaboration.",
    icon: Code,
    year: "2024",
    color: "text-green-400",
    bgColor: "bg-green-400/10"
  },
  {
    id: 3,
    title: "Top Performer on HackerRank",
    description: "Earned a 5-star badge in Problem Solving on HackerRank, demonstrating consistent DSA and algorithmic skills.",
    icon: Star,
    year: "2023",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10"
  },
  {
    id: 4,
    title: "Volunteering & Community Work",
    description: "Organized blood donation camps in collaboration with NGOs to support healthcare efforts in underprivileged communities.",
    icon: HeartHandshake,
    year: "2023",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10"
  },
  {
    id: 5,
    title: "Super 30 Member",
    description: "Selected as part of the prestigious Super 30 program, receiving focused training in engineering entrance preparation and problem-solving.",
    icon: GraduationCap,
    year: "2020",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10"
  }
];
 

function About() {
  return (
    <main className="container mx-auto max-w-screen-lg py-16 px-4 sm:px-6 lg:px-8 z-10">
      <section className="mb-20">
        <BlurFade delay={0.5} inView>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-white">
            About Me
          </h1>
          
          <div className="flex flex-col md:flex-row gap-10 items-start mb-8">
            {/* Profile Image Section */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
              <div className="mt-16 relative w-64 h-64 overflow-hidden rounded-xl border-2 border-blue-400/30">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-gray-900/40 z-10"></div>
                <Image 
                  src="/assets/profileimg.jpg" // Path to your image in the public folder
                  alt="Shinkhal Sinha"
                  width={300}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-gray-900 to-transparent z-20"></div>
              </div>
            </div>
            
            {/* About Text Content */}
            <div className="w-full md:w-2/3">
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
        <section className="mb-20"> 
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

      {/* Timeline Achievements Section - Now after education and work experience */}
      <BlurFade delay={1.1} inView>
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-100">
            Key Achievements
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            A collection of milestones and recognition that highlight my journey and contributions to the tech community.
          </p>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="relative">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.id} 
                  className={`flex mb-12 items-center relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content Side */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right mr-8' : 'text-left ml-8'}`}>
                    <div className={`p-6 rounded-xl shadow-lg transition-all duration-300 bg-gray-900/60 border border-gray-700/50 hover:shadow-blue-500/10 hover:border-blue-500/20`}>
                      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-2`}>
                        <div className={`${achievement.bgColor} p-2 rounded-lg ${index % 2 === 0 ? 'ml-3' : 'mr-3'}`}>
                          <achievement.icon size={20} className={achievement.color} />
                        </div>
                        <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Center Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full shadow ${achievement.bgColor} border-2 border-gray-800 z-10`}>
                      <div className={`w-full h-full rounded-full animate-pulse ${achievement.color.replace('text', 'bg')}`}></div>
                    </div>
                    <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium mt-2 shadow-md">{achievement.year}</span>
                  </div>
                  
                  {/* Empty Side - for spacing */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </BlurFade>
    </main>
  );
}

export default About;