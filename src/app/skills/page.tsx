"use client";
import Head from 'next/head';  // Import Head for SEO
import { MovingCards } from '@/components/movingcads';  
import { certifications } from '@/details';
import BlurFade from "@/components/magicui/blur-fade";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

// Define the props type for CertificationCard
interface CertificationCardProps {
  title: string;
  link: string;
}

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills & Certifications | Shinkhal Sinha&apos;s Portfolio</title>
        <meta name="description" content="Explore Shinkhal Sinha's technical proficiencies and certifications, including programming languages, technologies, and key skills. Learn how these can benefit your projects." />
        <meta name="keywords" content="Shinkhal Sinha, Skills, Certifications, Technical Proficiencies, Programming, Web Development, React, Next.js" />
        <meta property="og:title" content="Skills & Certifications | Shinkhal Sinha's Portfolio" />
        <meta property="og:description" content="Discover the programming languages and certifications that demonstrate Shinkhal Sinha's expertise in web development and software engineering." />
        <meta property="og:url" content="https://shinkhal-sinha.online/skills" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <main className="container mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        <section className="mb-5 max-w-screen-md">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-red-400 font-semibold mt-4 font-montserrat mb-5">
            Technical Proficiencies & Certifications
          </h1>
          <BlurFade delay={0.50} inView>
            <p>
              Welcome to my skills showcase! Here, you will find a detailed overview of the programming languages and technologies I am proficient in, along with the certifications I have earned.
              Each skill reflects my dedication to continuous learning and improvement in the tech field. 
              My certifications serve as a testament to my expertise and commitment to excellence. 
              Dive in to discover how my skills can benefit your team or project!
            </p>
          </BlurFade>
        </section>
        <section className='z-50'>
          <MovingCards />
        </section>
        <section className="pt-10">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-red-400 font-semibold mt-4 font-montserrat">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} title={cert.title} link={cert.link} />
            ))}
          </div>
        </section>
        <ShootingStars />
        <StarsBackground />
      </main>
    </>
  );
}

// CertificationCard component
const CertificationCard: React.FC<CertificationCardProps> = ({ title, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div 
      className="border p-4 cursor-pointer transition duration-300 rounded-xl mt-10 overflow-hidden shadow-lg shadow-slate-900 hover:scale-110 hover:shadow-2xl"
      onClick={handleClick}
    >
      <h3 className="text-lg font-semibold text-light-heading">{title}</h3>
      <p className="text-sm text-gray-600">Click to view certificate</p>
    </div>
  );
};
