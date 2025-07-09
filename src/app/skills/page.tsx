"use client";
import { useState } from "react";
import Head from "next/head";
import {SkillsGrid} from "@/components/SkillsGrid";
import { certifications } from "@/details";
import BlurFade from "@/components/magicui/blur-fade";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";
import { Award, ExternalLink, FileText } from "lucide-react";

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

// Minimalist Certification Card Component
const CertificationCard = ({
  title,
  link,
  pdfurl,
  issuer = "Certification Authority",
}) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-lg backdrop-blur-sm bg-gray-900/40 border border-gray-700/30 hover:border-red-400/40 shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500/60 to-red-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="p-6">
        {/* Certificate Icon */}
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-red-500/10 p-2 rounded-lg">
            <Award size={20} className="text-red-400" />
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-white group-hover:text-red-100 transition-colors duration-300 leading-tight">
              {title}
            </h3>
          </div>
        </div>
        
        {/* Issuer */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 font-medium">{issuer}</p>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col gap-3">
          <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors group/link"
          >
            <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
            <span className="text-sm font-medium">View Certificate</span>
          </a>
          
          {pdfurl && (
            <a 
              href={pdfurl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors group/pdf"
            >
              <FileText size={14} className="group-hover/pdf:translate-x-0.5 transition-transform" />
              <span className="text-sm">Download PDF</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};