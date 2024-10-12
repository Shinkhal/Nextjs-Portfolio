"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { projectDetails } from "@/details"; 

export function ThreeDCardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 -mt-32 ">
      {projectDetails.map((project) => (
        <CardContainer key={project.title} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {project.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project.image}
                height="600"
                width="600"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={project.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              {project.previewLink ? (
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.previewLink}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Preview →
                </CardItem>
              ) : (
                <div className="text-neutral-400 text-xs">No Preview</div>
              )}
              {project.githubLink ? (
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.githubLink}
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  GitHub
                </CardItem>
              ) : (
                <div className="text-neutral-400 text-xs">No GitHub Link</div>
              )}
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
