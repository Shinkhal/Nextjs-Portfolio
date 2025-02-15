"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { skills } from "@/details";

// Convert skills object into an array of objects with categories
const skillsArray = Object.entries(skills).map(([category, skillList]) => ({
  category,
  skills: skillList,
}));

const ReviewCard = ({ content }) => {
  return (
    <figure
      className={cn(
        "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <figcaption className="text-sm font-medium dark:text-white text-center">
        {content}
      </figcaption>
    </figure>
  );
};

export function MovingCards() {
  return (
    <div className="relative flex flex-col gap-6 w-full overflow-hidden rounded-lg md:shadow-xl">
      {skillsArray.map(({ category, skills }) => (
        <div key={category} className="w-full">
          <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
          <Marquee pauseOnHover className="[--duration:20s]">
            {skills.map((skill) => (
              <ReviewCard key={skill.id} {...skill} />
            ))}
          </Marquee>
        </div>
      ))}
    </div>
  );
}
