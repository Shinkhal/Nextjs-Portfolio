"use client";
import { useState } from "react";
import Head from "next/head";
import {SkillsGrid} from "@/components/SkillsGrid";
import { certifications } from "@/details";
import BlurFade from "@/components/magicui/blur-fade";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState("skills");

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <Head>
        <title>Skills & Certifications | Shinkhal Sinha</title>
        <meta
          name="description"
          content="Explore Shinkhal Sinha's technical proficiencies and certifications, including programming languages, technologies, and key skills."
        />
      </Head>

      <main className="container mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title with Animation */}
        <BlurFade delay={0.2} inView>
          <h1 className="text-4xl md:text-5xl font-bold text-red-400 font-montserrat mb-8">
            Technical Proficiencies & Certifications
          </h1>
        </BlurFade>

        {/* Description */}
        <BlurFade delay={0.5} inView>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl">
            Welcome to my skills showcase! Here, you&apos;ll find a detailed
            overview of my technical expertise and professional certifications that
            demonstrate my commitment to continuous learning and professional growth.
          </p>
        </BlurFade>

        {/* Tab Navigation */}
        <BlurFade delay={0.7} inView>
          <div className="flex flex-wrap gap-4 mt-8 mb-12">
            <button
              className={`px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${
                selectedTab === "skills"
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border border-gray-700/50"
              }`}
              onClick={() => setSelectedTab("skills")}
            >
              <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
              Skills
            </button>
            <button
              className={`px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${
                selectedTab === "certifications"
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border border-gray-700/50"
              }`}
              onClick={() => setSelectedTab("certifications")}
            >
              <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
              Certifications
            </button>
          </div>
        </BlurFade>

        {/* Content Area with Animation */}
        <motion.div
          key={selectedTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={tabVariants}
        >
          {selectedTab === "skills" && (
            <section>
              <SkillsGrid  /> 
            </section>
          )}

          {/* Certifications Section */}
          {selectedTab === "certifications" && (
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                  <CertificationCard
                    key={cert.id}
                    title={cert.title}
                    link={cert.link}
                    pdfurl={cert.pdfurl}
                    issuer={cert.issuer}
                    date={cert.issueDate}
                  />
                ))}
              </div>
            </section>
          )}
        </motion.div>

        <ShootingStars />
        <StarsBackground />
      </main>
    </>
  );
}

// Enhanced Certification Card Component with PDF Display
const CertificationCard = ({
  title,
  link,
  pdfurl,
  issuer = "Certification Authority",
  date = "2023",
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-gray-800/30 border border-gray-700/50 hover:border-red-400/50 shadow-lg transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-300"></div>
      
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <h3 className="text-lg font-semibold text-white flex-grow">{title}</h3>
        </div>
        
        {/* Certificate PDF Display */}
        {pdfurl && (
          <div className="mb-4 overflow-hidden rounded-md bg-gray-900/50 h-56">
            <object
              data={pdfurl}
              type="application/pdf"
              width="100%"
              height="100%"
              className="rounded-md"
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-center text-gray-400 p-4">
                  PDF preview not available. 
                  <a href={pdfurl} className="block mt-2 text-red-400 hover:underline">
                    Download PDF
                  </a>
                </p>
              </div>
            </object>
          </div>
        )}
        
        <div className="space-y-3 mt-auto">
          <div className="flex items-center gap-2 text-gray-300">
            <Award size={16} className="text-red-400" />
            <span className="text-sm">{issuer}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar size={16} className="text-red-400" />
            <span className="text-sm">{date}</span>
          </div>
          
          <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 mt-4 text-red-400 hover:text-red-300 transition-colors"
          >
            <span>View Original Certificate</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};