"use client";
import { useState } from "react";
import Head from "next/head";
import { MovingCards } from "@/components/movingcads";  
import { skills, certifications } from "@/details";
import BlurFade from "@/components/magicui/blur-fade";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState("skills");

  return (
    <>
      <Head>
        <title>Skills & Certifications | Shinkhal Sinha</title>
        <meta
          name="description"
          content="Explore Shinkhal Sinha's technical proficiencies and certifications, including programming languages, technologies, and key skills."
        />
      </Head>

      <main className="container mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-red-400 font-montserrat mb-8">
          Technical Proficiencies & Certifications
        </h1>

        {/* Description */}
        <BlurFade delay={0.5} inView>
          <p className="text-lg text-gray-300">
            Welcome to my skills showcase! Here, you will find a detailed
            overview of my technical skills and certifications.
          </p>
        </BlurFade>

        <div className="flex gap-4 mt-8">
          <button
            className={`px-6 py-2 text-lg font-medium rounded-lg transition ${
              selectedTab === "skills"
                ? "bg-red-500 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => setSelectedTab("skills")}
          >
            Skills
          </button>
          <button
            className={`px-6 py-2 text-lg font-medium rounded-lg transition ${
              selectedTab === "certifications"
                ? "bg-red-500 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => setSelectedTab("certifications")}
          >
            Certifications
          </button>
        </div>

        {selectedTab === "skills" && (
          <section className="mt-10">
            <MovingCards /> 
          </section>
        )}

        {/* Certifications Section */}
        {selectedTab === "certifications" && (
          <section className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <CertificationCard
                  key={cert.id}
                  title={cert.title}
                  link={cert.link}
                />
              ))}
            </div>
          </section>
        )}

        <ShootingStars />
        <StarsBackground />
      </main>
    </>
  );
}

// Certification Card Component
const CertificationCard: React.FC<{ title: string; link: string }> = ({
  title,
  link,
}) => {
  return (
    <div
      className="border p-4 cursor-pointer transition duration-300 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl"
      onClick={() => window.open(link, "_blank")}
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">Click to view certificate</p>
    </div>
  );
};
