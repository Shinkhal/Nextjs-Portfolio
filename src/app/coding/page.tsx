"use client";
import GitHubCalendarComponent from "@/components/Github";
import BlurFade from "@/components/magicui/blur-fade";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import LeetCodeCalendar from "@/components/Leetcode";
import GeeksforGeeksStatsCard from "@/components/Geeksforgeeks"

export default function coding(){
    return(
        <main className="container mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8">
            <section className="mb-16 max-w-screen-lg">
                <h1 className="text-3xl md:text-4xl lg:text-6xl text-red-400 font-semibold mt-4 font-montserrat">
                Focus on Achievements
                </h1>
                <BlurFade delay={0.5} inView>
                <p className="mt-5">
                In this section, I highlight my coding achievements that illustrate my proficiency in software development and competitive programming.
                 From solving complex problems on LeetCode to contributing to projects on GitHub,
                  each score and contribution represents my passion for coding and problem-solving.
                </p>
                </BlurFade>
            </section>
            <section>
                <BlurFade delay={1} inView>
                    <GitHubCalendarComponent username="Shinkhal"/>
                    <LeetCodeCalendar />
                    <GeeksforGeeksStatsCard />
                </BlurFade>
            </section>
            <ShootingStars/>
            <StarsBackground/>
        </main>
    )
};