"use client";

import { skills } from "@/details";
import { 
  Code, Database, Server, Github, 
  Globe, FileCode, Layers,
  Cpu, Codepen, 
  Cloud, Terminal, Zap, Box
} from "lucide-react";

// Icons mapping for skills with colors appropriate for a portfolio
const skillIcons = {
  // Frontend
  "HTML5": <Globe className="text-orange-400" size={16} />,
  "CSS3": <FileCode className="text-blue-400" size={16} />,
  "JavaScript": <Code className="text-yellow-400" size={16} />,
  "ReactJS": <Zap className="text-cyan-400" size={16} />,
  "React Native": <Zap className="text-purple-400" size={16} />,
  "Next.js": <Box className="text-white" size={16} />,
  "Angular": <Codepen className="text-red-400" size={16} />,
  "Tailwind CSS": <Layers className="text-cyan-400" size={16} />,
  "Bootstrap": <Layers className="text-purple-400" size={16} />,
  "jQuery": <Code className="text-blue-300" size={16} />,
  
  // Backend
  "Node.js": <Server className="text-green-400" size={16} />,
  "Express.js": <Server className="text-gray-300" size={16} />,
  "PHP": <FileCode className="text-purple-400" size={16} />,
  "REST APIs": <Terminal className="text-green-300" size={16} />,
  
  // Programming
  "C": <Terminal className="text-blue-400" size={16} />,
  "C++": <Terminal className="text-blue-500" size={16} />,
  "Java": <Terminal className="text-orange-400" size={16} />,
  "Python": <Terminal className="text-yellow-300" size={16} />,
  "Data Structures & Algorithms": <Cpu className="text-green-300" size={16} />,
  "Competitive Programming": <Cpu className="text-purple-300" size={16} />,
  
  // Databases & Cloud
  "MongoDB": <Database className="text-green-400" size={16} />,
  "MySQL": <Database className="text-blue-400" size={16} />,
  "Firebase": <Database className="text-orange-400" size={16} />,
  "AWS": <Cloud className="text-orange-300" size={16} />,
  "Docker": <Cloud className="text-blue-300" size={16} />,
  
  // Version Control
  "Git": <Github className="text-orange-400" size={16} />,
  "GitHub": <Github className="text-gray-300" size={16} />
};

// Main categories we want to display
const mainCategories = ["Frontend", "Backend", "Programming", "Infrastructure"];

const SkillItem = ({ skill }) => {
  return (
    <div className="flex items-center gap-2 py-2 px-1 border-b border-gray-700/50 hover:bg-gray-700/30 rounded transition-colors">
      <div>
        {skillIcons[skill.content] }
      </div>
      <span className="text-sm text-gray-200">{skill.content}</span>
    </div>
  );
};

export function SkillsGrid() {
  // Create a properly categorized skills object
  const categorizedSkills = {
    "Frontend": [],
    "Backend": [],
    "Programming": [],
    "Infrastructure": []
  };

  // Loop through original skills data and categorize skills accordingly
  Object.entries(skills).forEach(([category, skillsList]) => {
    if (category === "Frontend") {
      categorizedSkills["Frontend"] = skillsList;
    } 
    else if (category === "Backend") {
      categorizedSkills["Backend"] = skillsList;
    } 
    else if (category === "Programming") {
      categorizedSkills["Programming"] = skillsList;
    } 
    else if (category === "Infrastructure") {
      // Add these to Infrastructure
      categorizedSkills["Infrastructure"] = [
        ...categorizedSkills["Infrastructure"],
        ...skillsList
      ];
    }
  });

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mainCategories.map((category) => (
          <div key={category} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30 hover:border-indigo-500/30 transition-colors">
            <h3 className="text-lg font-medium text-white mb-4 pb-2 border-b border-gray-700 flex items-center gap-2">
              {category === "Frontend" && <Globe size={18} className="text-blue-400" />}
              {category === "Backend" && <Server size={18} className="text-green-400" />}
              {category === "Programming" && <Code size={18} className="text-yellow-400" />}
              {category === "Infrastructure" && <Database size={18} className="text-purple-400" />}
              {category}
            </h3>
            <div className="space-y-1">
              {categorizedSkills[category]?.length > 0 ? (
                categorizedSkills[category].map(skill => (
                  <SkillItem key={skill.id} skill={skill} />
                ))
              ) : (
                <div className="text-sm text-gray-400 italic">No skills listed</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
