"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { projectDetails } from "@/details"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ThreeDCardDemo } from "@/components/card";

export default function Projects() {
  return (
    <>
    <HeroParallax projects={projectDetails} />
    <ThreeDCardDemo/>
    <ShootingStars />
    <StarsBackground />
    </>
  )
};
