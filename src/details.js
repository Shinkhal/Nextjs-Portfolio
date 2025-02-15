
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
    Position: "Gen AI Coder",
    Company: "Outlier",
    Location: "Work from home",
    Type: "Internship",
    Duration: "October 2024 - Present"
  },
  {
    Position: "Web Developer Intern",
    Company: "Beasova (AICTE)",
    Location: "Work from home",
    Type: "Internship",
    Duration: "August 2024 - September 2024"
  },
  {
    Position: "Web Developer Intern",
    Company: "CognoRise Infotech",
    Location: "Work from home",
    Type: "Internship",
    Duration: "August 2024 - September 2024"
  },
  {
    Position: "Graphic Designer",
    Company: "Labdox",
    Location: "Work from home",
    Type: "Internship",
    Duration: "May 2024 - June 2024"
  }
  
];


// Enter your Education Details here
export const eduDetails = [
  {
    Course: "Bachelor of Technology (B.Tech)",
    Branch: "Computer Science and Engineering",
    Institute: "LoveLy Professional University",
    Location: "Phagwara,Punjab",
    Duration: "2022 - 2026",
  },
  {
    Course: "Senior Secondary Education",
    Branch:"CBSE",
    Institute: "Secondary Delhi Public School",
    Location: "Gaya,Bihar",
    Duration: "2020- 2022"
  },
  {
    Course: "Secondary Education",
    Branch:"CBSE",
    Institute: "Nazareth Academy",
    Location: "Gaya,Bihar",
    Duration: "2020"
  }
];

export const skills = {
  "Frontend Development": [
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
  "Backend Development": [
    { id: "NodeJS_skill", content: "Node.js" },
    { id: "ExpressJS_skill", content: "Express.js" },
    { id: "PHP_skill", content: "PHP" },
    { id: "RESTAPIs_skill", content: "REST APIs" }
  ],
  "Programming & CS Fundamentals": [
    { id: "C_skill", content: "C" },
    { id: "Cpp_skill", content: "C++" },
    { id: "Java_skill", content: "Java" },
    { id: "Python_skill", content: "Python" },
    { id: "DSA_skill", content: "Data Structures & Algorithms" },
    { id: "Competitive_Programming", content: "Competitive Programming" }
  ],
  "Databases & Cloud": [
    { id: "MongoDB_skill", content: "MongoDB" },
    { id: "MySQL_skill", content: "MySQL" },
    { id: "Firebase_skill", content: "Firebase" },
    { id: "AWS_skill", content: "AWS" },
    { id: "Docker_skill", content: "Docker" }
  ],
  "Version Control & DevOps": [
    { id: "Git_skill", content: "Git" },
    { id: "GitHub_skill", content: "GitHub" }
  ]
};


export const certifications = [
  { id: 1, title: "Cloud Computing With AWS", link: "https://drive.google.com/file/d/10yiShlZmrhnIsrg-Lov3WYmOhWnCVLSG/view?usp=sharing" },
  {id: 2, title: "Oracle Cloud Infrastructure 2024 Generative AI Professional", link :"https://drive.google.com/file/d/1x0b2YghLX0xKmrTn3ogHmuSuu2N3zSVN/view?usp=sharing"},
  { id: 3, title: "React Basics -  Meta", link: "https://coursera.org/share/01084822bc72f8fd52723b8b0b818469" },
  { id: 4, title: "The Full Stack - Meta", link: "https://coursera.org/share/d7747531acf11717b7a35132d4e9af86" },
  { id: 5, title:"Server side JavaScript with Node.js",link:"https://coursera.org/share/eb652d49afd4a62c888e2948d539ba86"},
  { id: 7,title:"Programming in C++",link:"https://coursera.org/share/2b141ebe967096edadf49b465324e171"},
  { id: 8, title:"Python Basics - HackerRank", link:"https://www.hackerrank.com/certificates/a6ff7f090c6e"},
  { id: 9, title:"Dynamic Programming,Greedy Algorithm", link:"https://coursera.org/share/3133e5feef011f808a1c5ed0ffe46555"},
  { id: 10, title:"Approximation Algorithms and Linear Programming", link:"https://coursera.org/share/790380c56167ca775372199ae5e265bd"},
  { id: 11, title:"Generative AI with Large Language Models", link:"https://coursera.org/share/3623ad857b20e3fa98a442285a4fecae"},
  { id: 12, title:"Prompt Engineering for ChatGPT", link:"https://coursera.org/share/b49db0f9515db30c879a1541658d7ae8"}
  // Add more certifications
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Movie Search App",
    image: '/assets/projects/project8.png',
    description: `Created a simple movie search app that fetches data from a movie database API and displays the results in a user-friendly interface, with real-time search suggestions and optimized input handling.`,
    techstack: "Nextjs, Tailwind Css, Typescript",
    previewLink: "https://movie-quest-app.vercel.app/",
    githubLink: "https://github.com/Shinkhal/Movie-Quest",
  },
  {
    title: "Next.js Portfolio",
    image: '/assets/projects/project9.png',
    description: `A personal portfolio website built with Next.js and Tailwind CSS, showcasing dynamic content and optimized for SEO and performance.`,
    techstack: "Next.js, Tailwind CSS",
    previewLink: "https://nextjs-portfolio.vercel.app/",
    githubLink: "https://github.com/Shinkhal/Nextjs-Portfolio",
  },
  {
    title: "Farmease App",
    image: '/assets/projects/project10.png',
    description: `A mobile application connecting farmers directly with consumers and retailers. The app includes AI/ML features to enhance user experience and optimize operations.`,
    techstack: "React Native, Node.js, MongoDB, JWT",
    previewLink: "https://farmease-app.com/",
    githubLink: "https://github.com/Shinkhal/Farmease",
  },
  {
    title: "GeeksForGeeks Api",
    image: '/assets/projects/project7.png',
    description: `This API allows you to retrieve user statistics from GeeksforGeeks. Simply append a GeeksforGeeks username to the URL to get detailed stats for that user.`,
    techstack: "Node.js, Express.js, Puppeteer",
    previewLink: "https://gfg-api-bjiu.onrender.com",
    githubLink: "https://github.com/Shinkhal/gfg_api",
  },
  {
    title: "Cakes N Shapes (Bakery Website)",
    image: '/assets/projects/project11.png',  
    description: `Developed a bakery website that allows users to log in, book a table to dine-in, browse the menu, check prices, and view bakery details.`,
    techstack: "Vite+React, Node.js, MongoDB, JWT",
    previewLink: "https://dwija-bake-studio.store/", // Provide the preview link
    githubLink: "https://github.com/Shinkhal/Cakes-N-Shape",
  },
  {
    title: "KeyDrive (Car Rental Website)",
    image: '/assets/projects/project12.png',  // Replace with actual image path
    description: `A car rental website built with PHP, allowing users to browse available cars, make reservations, and manage bookings.`,
    techstack: "PHP, MySQL, HTML, CSS",
    previewLink: "", // Provide the preview link
    githubLink: "https://github.com/Shinkhal/Car-rental",
  },
  {
    title: "Restaurant Table Booking",
    image: '/assets/projects/project2.png',
    description: `Created a streamlined Restaurant Table Booking Website for convenient reservation management and other services of the restaurant with proper validation and authentication.`,
    techstack: "MERN Stack",
    previewLink: "https://cusine.feista-flavours.infinityfreeapp.com",
    githubLink: "https://github.com/Shinkhal/Feista-Flavours",
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
    title: "Restaurant Frontend",
    image: '/assets/projects/project3.png',
    description: `Project for Meta Capstone where Developed an intuitive Frontend website for seamless online meal selection and food delivery.`,
    techstack: "React.js",
    githubLink: "https://github.com/Shinkhal/shinkhal.github.io/tree/main",
    previewLink: "", // Provide a placeholder if there's no preview link
  },
  {
    title: "UMS Website",
    image: '/assets/projects/project4.png',
    description: `Crafted a user-friendly University Management System website. A comprehensive university student portal to view teacher messages, academic updates, timetable, fees, assignments, attendance, and more.`,
    techstack: "HTML/CSS, JavaScript",
    githubLink: "https://github.com/Shinkhal/UMS",
    previewLink: "", // Provide a placeholder if there's no preview link
  },
  {
    title: "Logos And Posters",
    image: '/assets/projects/project5.png',
    description: `Designed logos and posters using Adobe Photoshop, Canva, Illustrator, InDesign, and Lightroom.`,
    techstack: "Adobe Photoshop, Canva, Illustrator, InDesign, Lightroom",
    previewLink: "https://drive.google.com/drive/folders/1jdHNNNcYe-zQWCYMmqPooEKV4GwiPJ3f?usp=sharing",
    githubLink: "", // Provide a placeholder if there's no GitHub link
  },
  {
    title: "MCU Illustrations",
    image: '/assets/projects/project6.png',
    description: `Created some illustration designs based on the characters of the Marvel Cinematic Universe (MCU).`,
    techstack: "Adobe Photoshop, Illustrator",
    previewLink: "https://drive.google.com/drive/folders/1jdHNNNcYe-zQWCYMmqPooEKV4GwiPJ3f?usp=sharing",
    githubLink: "", // Provide a placeholder if there's no GitHub link
  }
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