"use client";

import Head from 'next/head';
import HeroSection from "@/components/Hero";
import About from "@/components/about";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Profilelinks from "@/components/Profilelink";


export default function Home() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Shinkhal Sinha | Web Developer & Designer</title>
        <meta name="description" content="I'm Shinkhal Sinha, a web developer and designer specializing in creating innovative web solutions with modern technologies like React, Next.js, and Tailwind CSS." />
        <meta name="keywords" content="Shinkhal Sinha, web developer, portfolio, React developer, Next.js developer, frontend developer, Nodejs developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Shinkhal Sinha | Web Developer & Designer" />
        <meta property="og:description" content="Explore my portfolio of innovative web projects built with modern technologies." />
        <meta property="og:url" content="https://shinkhal-sinha.online" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shinkhal Sinha | Web Developer & Designer" />
        <meta name="twitter:description" content="Explore my portfolio of innovative web projects built with modern technologies." />
        

        {/* Canonical Tag */}
        <link rel="canonical" href="https://shinkhal-sinha.online" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shinkhal Sinha",
              "url": "https://shinkhal-sinha.online",
              "sameAs": [
                "https://www.linkedin.com/in/shinkhal-sinha",
                "https://github.com/shinkhal",
              ],
              "jobTitle": "Web Developer & Designer",
              "description": "I'm Shinkhal Sinha, a web developer and designer specializing in creating innovative web solutions with modern technologies like React, Next.js, and Tailwind CSS."
            }
          `}
        </script>
      </Head>

      <main>
        <HeroSection />
        <About />
        <Profilelinks />
        <ShootingStars />
        <StarsBackground />
      </main>
    </>
  );
}
