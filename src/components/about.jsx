import React from "react";
import { personalDetails, workDetails, eduDetails } from "../details";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import BlurFade from "@/components/magicui/blur-fade";


function About() {
  return (
    <main className="container mx-auto max-w-screen-lg pt-10 pb-20 px-4 sm:px-6 lg:px-8 z-10">
      <section className="mb-16">
      <BlurFade delay={1} inView>
        <h1 className="text-3xl md:text-4xl text-red-400 lg:text-5xl text-light-heading font-bold mb-8">About Me</h1>
        <p className="font-montserrat">
          {personalDetails.about}
        </p>
      </BlurFade>
      </section>

      <BlurFade delay={1} inView>
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl text-red-400 lg:text-5xl text-light-heading font-bold mb-8">
          Work Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workDetails.map((work, index) => (
            <CardSpotlight key={index} className="h-76 w-98 ">
              <p className="text-xl font-bold relative z-5 mt-2 text-white">{work.Position} - {work.Company}</p>
              <div className="text-neutral-200 mt-4">
                <p className="text-lg relative z-5 mt-2 text-white">{work.Location}</p>
                <p className="text-lg relative z-5 mt-2 text-white">{work.Type}</p>
                <p className="text-lg relative z-5 mt-2 text-white">{work.Duration}</p>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </section>
      </BlurFade>
      <BlurFade delay={1} inView>
      <section> 
        <h1 className="text-3xl md:text-4xl text-red-400 lg:text-5xl text-light-heading font-bold mb-8">
          Education
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eduDetails.map((edu, index) => (
            <CardSpotlight key={index} className="h-76 w-98">
              <p className="text-xl font-bold relative z-5 text-white">{edu.Course}</p>
              <div className="text-neutral-200 mt-4">
                <p className="text-lg relative z-5 mt-2 text-white">{edu.Branch}</p>
                <p className="text-lg relative z-5 mt-2 text-white">{edu.Institute}, {edu.Location}</p>
                <p className="text-lg relative z-5 mt-2 text-white">{edu.Duration}</p>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </section>
      </BlurFade>
    </main>
  );
}

export default About;
