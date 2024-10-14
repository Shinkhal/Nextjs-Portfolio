"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  image: string;
  description: string;
  techstack: string;
  previewLink?: string; // Optional
  githubLink: string; // Required
}

export const HeroParallax = ({
  projects,
}: {
  projects: Project[]; 
}) => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-20">
          {firstRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-10">
          {secondRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        {/* Uncomment if you want to use a third row */}
        {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
          {thirdRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full z-10 left-0 top-0 -mt-20">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The <br /> Project Corner
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        This collection highlights some of his most exciting and innovative work, spanning web development and full-stack applications. Each project reflects his passion for creating impactful solutions using the latest technologies. Explore live demos, browse through the code, and discover how I bring ideas to life with thoughtful design and development.
      </p>
    </div>
  );
};

export const ProjectCard = ({
  project,
  translate,
}: {
  project: Project; // Use the Project interface
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className="group/project h-80 w-[24rem] relative flex-shrink-0"
    >
      <Image
        src={project.image}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={project.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/project:opacity-80 bg-black pointer-events-none">
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/project:opacity-100 text-white">
          {project.title}
        </h2>
      </div>
    </motion.div>
  );
};
