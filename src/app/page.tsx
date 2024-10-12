"use client"; // Add this at the top of your page.tsx
import HeroSection from "@/components/Hero";
import About from "@/components/about";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import  Profilelinks  from "@/components/Profilelink";
export default function Home() {
  return (
    <>
      <HeroSection />
      <About/>
      <Profilelinks/>
      <ShootingStars />
      <StarsBackground />
    </>
  );
}
