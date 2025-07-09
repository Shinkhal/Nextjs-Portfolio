import { Trophy, Code, Star, HeartHandshake, GraduationCap } from 'lucide-react';

// Enter your Personal Details here
export const personalDetails = {
  name: "Shinkhal Sinha",
  tagline: "I build things for web",
  about: `I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/shinkhal-sinha/",
  github: "https://github.com/Shinkhal",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "React Developer Intern",
    Company: "Celebal Technologies",
    Location: "Remote",
    Type: "Internship",
    Duration: "May 2025 - July 2025",
  },
  {
    logo: '/assets/placeholder.png',
    Position: "Ai Trainer ",
    Company: "Alignerr",
    Location: "Remote",
    Type: "Freelancing", 
    Duration: "March 2025 - Present"
  },
  {
    logo: '/assets/outlier.png',
    Position: "Gen AI Coder",
    Company: "Outlier",
    Location: "Remote",
    Type: "Freelancing",
    Duration: "October 2024 - Present"
  },
  {
    logo: '/assets/beasova.webp',
    Position: "Web Developer Intern",
    Company: "Beasova (AICTE)",
    Location: "Remote",
    Type: "Internship",
    Duration: "August 2024 - September 2024"
  },
  {
    logo: '/assets/labdox.png',
    Position: "Graphic Designer",
    Company: "Labdox",
    Location: "Remote",
    Type: "Internship",
    Duration: "May 2024 - June 2024"
  },
  
];


// Enter your Education Details here
export const eduDetails = [
  {
    logo: '/assets/lpu.png',
    Course: "Bachelor of Technology (B.Tech)",
    Branch: "Computer Science and Engineering",
    Institute: "LoveLy Professional University",
    Location: "Phagwara,Punjab",
    Duration: "2022 - 2026",
  },
  {
    logo: '/assets/dps.png',
    Course: "Senior Secondary Education",
    Branch:"CBSE",
    Institute: "Secondary Delhi Public School",
    Location: "Gaya,Bihar",
    Duration: "2020- 2022"
  },
  {
    logo: '/assets/nazareth.png',
    Course: "Secondary Education",
    Branch:"CBSE",
    Institute: "Nazareth Academy",
    Location: "Gaya,Bihar",
    Duration: "2020"
  }
];

export const skills = {
  "Frontend": [
    { id: "HTML5_skill", content: "HTML5" },
    { id: "CSS3_skill", content: "CSS3" },
    { id: "JavaScript_skill", content: "JavaScript" },
    { id: "ReactJS_skill", content: "ReactJS" },
    { id: "ReactNative_skill", content: "React Native" },
    { id: "NextJS_skill", content: "Next.js" },
    { id: "Angular_skill", content: "Angular" },
    { id: "TailwindCSS_skill", content: "Tailwind CSS" },
    { id: "Bootstrap_skill", content: "Bootstrap" },
    { id: "jQuery_skill", content: "jQuery" }
  ],
  "Backend": [
    { id: "NodeJS_skill", content: "Node.js" },
    { id: "ExpressJS_skill", content: "Express.js" },
    { id: "PHP_skill", content: "PHP" },
    { id: "RESTAPIs_skill", content: "REST APIs" }
  ],
  "Programming": [
    { id: "C_skill", content: "C" },
    { id: "Cpp_skill", content: "C++" },
    { id: "Java_skill", content: "Java" },
    { id: "Python_skill", content: "Python" },
    { id: "DSA_skill", content: "Data Structures & Algorithms" },
    { id: "Competitive_Programming", content: "Competitive Programming" }
  ],
  "Infrastructure": [
    { id: "MongoDB_skill", content: "MongoDB" },
    { id: "MySQL_skill", content: "MySQL" },
    { id: "Firebase_skill", content: "Firebase" },
    { id: "AWS_skill", content: "AWS" },
    { id: "Docker_skill", content: "Docker" },
    { id: "Git_skill", content: "Git" },
    { id: "GitHub_skill", content: "GitHub" }
  ]
};



export const certifications = [
  {
    id: 1, 
    title: "Cloud Computing", 
    link: "https://drive.google.com/file/d/10yiShlZmrhnIsrg-Lov3WYmOhWnCVLSG/view?usp=sharing",
    issuer: "NPTEL",
    issueDate: "2024",
    pdfurl: "/assets/certificates/cloudnptel.pdf"
  },
  {
    id: 2, 
    title: "Oracle Cloud Infrastructure 2024 Generative AI Professional", 
    link: "https://drive.google.com/file/d/1x0b2YghLX0xKmrTn3ogHmuSuu2N3zSVN/view?usp=sharing",
    issuer: "Oracle",
    issueDate: "2024",
    pdfurl: "/assets/certificates/oracle.pdf"
  },
  { 
    id: 3, 
    title: "React Basics", 
    link: "https://coursera.org/share/01084822bc72f8fd52723b8b0b818469",
    issuer: "Meta",
    issueDate: "2023",
    pdfurl: "/assets/certificates/react.pdf"
  },
  { 
    id: 4, 
    title: "Cloud Computing With AWS", 
    link: "https://drive.google.com/file/d/10yiShlZmrhnIsrg-Lov3WYmOhWnCVLSG/view?usp=sharing",
    issuer: "Amazon Web Services",
    issueDate: "2024",
    pdfurl: "/assets/certificates/cloud.pdf"
  },
  { 
    id: 5, 
    title: "The Full Stack", 
    link: "https://coursera.org/share/d7747531acf11717b7a35132d4e9af86",
    issuer: "Meta",
    issueDate: "2023",
    pdfurl: "/assets/certificates/fullstack.pdf"
  },
  { 
    id: 6, 
    title: "Server side JavaScript with Node.js",
    link: "https://coursera.org/share/eb652d49afd4a62c888e2948d539ba86",
    issuer: "Coursera",
    issueDate: "2024",
    pdfurl: "/assets/certificates/nodejs.pdf"
  },
  { 
    id: 7,
    title: "Programming in C++",
    link: "https://coursera.org/share/2b141ebe967096edadf49b465324e171",
    issuer: "Coursera",
    issueDate: "2023",
    pdfurl: "/assets/certificates/cpp.pdf",
  },
  { 
    id: 8, 
    title: "Python Basics", 
    link: "https://www.hackerrank.com/certificates/a6ff7f090c6e",
    issuer: "HackerRank",
    issueDate: "2022",
    pdfurl : "/assets/certificates/python.pdf"
  },
  { 
    id: 9, 
    title: "Dynamic Programming & Greedy Algorithms", 
    link: "https://coursera.org/share/3133e5feef011f808a1c5ed0ffe46555",
    issuer: "Coursera",
    issueDate: "2024",
    pdfurl: "/assets/certificates/dp.pdf"
  },
  { 
    id: 10, 
    title: "Approximation Algorithms and Linear Programming", 
    link: "https://coursera.org/share/790380c56167ca775372199ae5e265bd",
    issuer: "Coursera",
    issueDate: "2024",
    pdfurl: "/assets/certificates/algorithms.pdf"
  },
  { 
    id: 11, 
    title: "Generative AI with Large Language Models", 
    link: "https://coursera.org/share/3623ad857b20e3fa98a442285a4fecae",
    issuer: "DeepLearning.AI",
    issueDate: "2024",
    pdfurl: "/assets/certificates/generativeai.pdf"
  },
  { 
    id: 12, 
    title: "Prompt Engineering for ChatGPT", 
    link: "https://coursera.org/share/b49db0f9515db30c879a1541658d7ae8",
    issuer: "DeepLearning.AI",
    issueDate: "2024",
    pdfurl: "/assets/certificates/prompt.pdf"
  }
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "CRM Campaign Manager",
    image: "/assets/projects/project17.png",
    description: `A mini CRM platform with visual rule builder for automated email campaigns and AI-generated performance tips using Gemini API. Includes campaign creation, user segmentation, and growth insights.`,
    techstack: "React.js, Node.js, MongoDB, SMTP, Google Gemini API",
    previewLink: "",
    githubLink: "https://github.com/Shinkhal/Mini-CRM",
  },
  {
    title: "Shipment Delivery Application",
    image: "/assets/projects/project18.png",
    description: `A full-stack logistics and shipment tracking platform with React frontend, secure backend, shipment status tracking, PDF invoice generation, and Razorpay payment integration. Users can download or mail shipment receipts.`,
    techstack: "React.js, Node.js, MongoDB, Razorpay, Brevo SMTP",
    previewLink: "",
    githubLink: "https://github.com/Shinkhal/Shipment-Delivery-App",
  },
  {
    title: "XKCD Comic Subscription",
    image: "/assets/projects/project19.png",
    description: `A PHP-based daily comic subscription app that emails random XKCD comics using CRON jobs. Features include email verification and an unsubscribe mechanism.`,
    techstack: "PHP, MySQL, CRON Jobs, PHPMailer",
    previewLink: "",
    githubLink: "https://github.com/Shinkhal/xkcd-subscription",
  },
  {
    title: "Business Utility Tool",
    image: "/assets/projects/project16.png",
    description: `A Laravel-based solution for small businesses to manage customers, inventory, and invoices. Features invoice generation, mailing, printing, and download capabilities.`,
    techstack: "Laravel, MySQL, Blade, Bootstrap, SMTP",
    previewLink: "",
    githubLink: "https://github.com/Shinkhal/Business-Utility-Tool",
  },
  {
    title: "Job Autofill (Ongoing)",
    image: "/assets/projects/project14.png",
    description: `An advanced job application platform that auto-fills forms using profile data, generates LaTeX resumes with ATS feedback from OpenAI, and supports dark/light mode toggle.`,
    techstack: "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Firebase, MongoDB, OpenAI API",
    previewLink: "https://autofill-job.vercel.app/",
    githubLink: "https://github.com/Shinkhal/autofill",
  },
  {
    title: "Cancer Prediction",
    image: "/assets/projects/project13.png",
    description: `Thyroid cancer prediction web app using ML models. Includes a chatbot, news updates, Tableau dashboard, and newsletter subscription.`,
    techstack: "React+Vite, Tailwind CSS, Python, Scikit-learn, Firebase, Tableau, NewsAPI",
    previewLink: "https://thyroidcancer.vercel.app/",
    githubLink: "https://github.com/Shinkhal/Cancer-Prediction",
  },
  {
    title: "MovieQuest",
    image: "/assets/projects/project8.png",
    description: `A movie discovery platform that allows users to browse by genre, search, view trending titles, and explore individual movie details.`,
    techstack: "Next.js, Tailwind CSS, TypeScript",
    previewLink: "https://movies-quest.vercel.app/",
    githubLink: "https://github.com/Shinkhal/Movie-Quest",
  },
  {
    title: "Next.js Portfolio",
    image: "/assets/projects/project9.png",
    description: `My personal portfolio showcasing projects and skills, built for SEO and performance using static optimization.`,
    techstack: "Next.js, Tailwind CSS",
    previewLink: "https://nextjs-portfolio.vercel.app/",
    githubLink: "https://github.com/Shinkhal/Nextjs-Portfolio",
  },
  {
    title: "QuickEats",
    image: "/assets/projects/project15.png",
    description: `A full-stack food delivery platform with real-time updates, integrated payments, and CRM features like order management and email automation.`,
    techstack: "MERN, JWT, SMTP, Payment Gateway",
    githubLink: "https://github.com/Shinkhal/QuickEats",
  },
  {
    title: "Farmease App",
    image: "/assets/projects/project10.png",
    description: `Smart India Hackathon finalist app connecting farmers to consumers and retailers. Features location-based ordering and AI/ML enhancements.`,
    techstack: "React Native, Node.js, MongoDB, JWT",
    previewLink: "https://farmease-app.com/",
    githubLink: "https://github.com/Shinkhal/Farmease",
  },
  {
    title: "Weather Dashboard",
    image: "/assets/projects/project14.png",
    description: `Real-time weather app with 5-day forecast, recent search history, dark/light mode, and responsive UI.`,
    techstack: "Next.js, Tailwind CSS, ShadCN, OpenWeatherMap API",
    previewLink: "https://weather-dashboard-navy-tau.vercel.app/",
    githubLink: "https://github.com/Shinkhal/Weather-Dashboard",
  },
  {
    title: "GeeksForGeeks API",
    image: "/assets/projects/project7.png",
    description: `Node.js-based API to fetch GeeksforGeeks user stats using Puppeteer.`,
    techstack: "Node.js, Express.js, Puppeteer",
    previewLink: "https://gfg-api-bjiu.onrender.com",
    githubLink: "https://github.com/Shinkhal/gfg_api",
  },
  {
    title: "Cakes N Shapes",
    image: "/assets/projects/project11.png",
    description: `Bakery website with table booking, menu, pricing, and bakery details.`,
    techstack: "Vite+React, Node.js, MongoDB, JWT",
    previewLink: "https://dwija-bake-studio.store/",
    githubLink: "https://github.com/Shinkhal/Cakes-N-Shape",
  },
    {
    title: "Portfolio",
    image: '/assets/projects/project1.png',
    description: `Discover my portfolio—an interactive showcase of projects, skills, and contact information. Explore live project previews and GitHub repositories to see my work in action.`,
    techstack: "React.js, Node.js, Tailwind css",
    previewLink: "https://apurwasharma.site/",
    githubLink: "https://github.com/Web-Dev-Protfolio",
  },
  {
    title: "KeyDrive (Car Rental)",
    image: "/assets/projects/project12.png",
    description: `Car rental web app with reservation and booking management.`,
    techstack: "PHP, MySQL, HTML, CSS",
    githubLink: "https://github.com/Shinkhal/Car-rental",
  },
  {
    title: "Restaurant Table Booking",
    image: "/assets/projects/project2.png",
    description: `Dining reservation app with auth and validation.`,
    techstack: "MERN Stack",
    previewLink: "https://cusine.feista-flavours.infinityfreeapp.com",
    githubLink: "https://github.com/Shinkhal/Feista-Flavours",
  },
  {
    title: "Restaurant Frontend (Meta Capstone)",
    image: "/assets/projects/project3.png",
    description: `Frontend-only food ordering interface for Meta Capstone project.`,
    techstack: "React.js",
    githubLink: "https://github.com/Shinkhal/shinkhal.github.io/tree/main",
  },
  {
    title: "Global Craft Hub",
    image: "/assets/projects/project0.png",
    description: `Static e-commerce platform to showcase handmade crafts with homepage, cart, shop, and contact.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://global-craft-hub.netlify.app/",
    githubLink: "https://github.com/Shinkhal/global-craft-hub",
  },
  {
    title: "UMS Website",
    image: "/assets/projects/project4.png",
    description: `University management portal for students to access academic and campus info.`,
    techstack: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Shinkhal/UMS",
  },
  {
    title: "Logos and Posters",
    image: "/assets/projects/project5.png",
    description: `Graphic design portfolio with logos, posters, and branding made in Photoshop, Illustrator, Canva.`,
    techstack: "Photoshop, Illustrator, InDesign, Canva, Lightroom",
    previewLink: "https://drive.google.com/drive/folders/1jdHNNNcYe-zQWCYMmqPooEKV4GwiPJ3f?usp=sharing",
  },
  {
    title: "MCU Illustrations",
    image: "/assets/projects/project6.png",
    description: `Digital illustrations based on Marvel Cinematic Universe characters.`,
    techstack: "Photoshop, Illustrator",
    previewLink: "https://drive.google.com/drive/folders/1jdHNNNcYe-zQWCYMmqPooEKV4GwiPJ3f?usp=sharing",
  },
];



export const profileLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Shinkhal',
    icon: 'FaGithub',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/Shinkhal',
    icon: 'SiLeetcode',
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/shinkhal',
    icon: 'SiGeeksforgeeks',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shinkhal-sinha',
    icon: 'FaLinkedin',
  },
  {
    name: 'Email',
    url: 'mailto:shinkhalsinha@gmail.com',
    icon: 'MdEmail',
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/techharsh',
    icon: 'FaBehance',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/shinkhalsinha',
    icon: 'FaHackerrank',
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/20679674/shinkhal-sinha',
    icon: 'FaStackOverflow',
  },
];

export const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon Finalist",
    description: "Ranked among the top 50 teams in college for Smart India Hackathon 2024 with the Farmease app aimed at connecting farmers to consumers and retailers.",
    icon: Trophy,
    year: "2024",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10"
  },
  {
    id: 2,
    title: "Open Source Contributor",
    description: "Contributed pull requests to 2–3 Apache GitHub repositories, actively supporting open-source development and collaboration.",
    icon: Code,
    year: "2024",
    color: "text-green-400",
    bgColor: "bg-green-400/10"
  },
  {
    id: 3,
    title: "Top Performer on HackerRank",
    description: "Earned a 5-star badge in Problem Solving on HackerRank, demonstrating consistent DSA and algorithmic skills.",
    icon: Star,
    year: "2023",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10"
  },
  {
    id: 4,
    title: "Volunteering & Community Work",
    description: "Organized blood donation camps in collaboration with NGOs to support healthcare efforts in underprivileged communities.",
    icon: HeartHandshake,
    year: "2023",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10"
  },
  {
    id: 5,
    title: "Super 30 Member",
    description: "Selected as part of the prestigious Super 30 program, receiving focused training in engineering entrance preparation and problem-solving.",
    icon: GraduationCap,
    year: "2020",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10"
  }
];