"use client";
import React from "react";
import Head from 'next/head'; // Import Head for SEO
import { HeroParallax } from "@/components/ui/hero-parallax";
import { projectDetails } from "@/details";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ThreeDCardDemo } from "@/components/card";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Shinkhal Sinha&apos;s Portfolio</title>
        <meta name="description" content="Explore the diverse range of projects developed by Shinkhal Sinha, showcasing skills in web development, design, and problem-solving." />
        <meta name="keywords" content="Shinkhal Sinha, Projects, Portfolio, Web Development, React, Next.js" />
        <meta property="og:title" content="Projects | Shinkhal Sinha's Portfolio" />
        <meta property="og:description" content="Discover innovative projects created by Shinkhal Sinha, highlighting technical skills and creativity." />
        <meta property="og:url" content="https://shinkhal-sinha.online/projects" />
        <meta name="twitter:card" content="summary" /> {/* No image, so using summary */}
      </Head>
      <HeroParallax projects={projectDetails} />
      <ThreeDCardDemo />
      <ShootingStars />
      <StarsBackground />
    </>
  );
};
