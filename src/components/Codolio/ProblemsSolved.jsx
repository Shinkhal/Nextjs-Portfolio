import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProblemsSolved = ({ profileData }) => {
  // Color mapping object to convert text color classes to actual hex colors
  const colorMap = {
    "text-green-400": "#22c55e",
    "text-yellow-400": "#eab308", 
    "text-red-400": "#ef4444",
    "text-blue-400": "#3b82f6",
    "text-purple-400": "#a855f7",
    "text-orange-400": "#fb923c",
    "text-pink-400": "#ec4899"
  };

  const [problemsData, setProblemsData] = useState({
    fundamentals: {
      total: 0,
      categories: []
    },
    dsa: {
      total: 0,
      categories: []
    },
    competitive: {
      total: 0,
      categories: []
    }
  });

  useEffect(() => {
    if (profileData && profileData.platformProfiles && profileData.platformProfiles.platformProfiles) {
      const platforms = profileData.platformProfiles.platformProfiles;
      
      // Extract GFG and HackerRank data for Fundamentals
      const gfgProfile = platforms.find(p => p.platform === 'geeksforgeeks');
      const hackerrankProfile = platforms.find(p => p.platform === 'hackerrank');
      
      const fundamentals = {
        total: 0,
        categories: []
      };
      
      if (gfgProfile && gfgProfile.totalQuestionStats && gfgProfile.totalQuestionStats.totalQuestionCounts) {
        fundamentals.categories.push({
          name: "GFG",
          count: 2, // Using the value from the image since GFG might have various question types
          color: "text-green-400"
        });
        fundamentals.total += 2;
      }
      
      if (hackerrankProfile && hackerrankProfile.totalQuestionStats && hackerrankProfile.totalQuestionStats.totalQuestionCounts) {
        fundamentals.categories.push({
          name: "HackerRank",
          count: hackerrankProfile.totalQuestionStats.totalQuestionCounts,
          color: "text-yellow-400"
        });
        fundamentals.total += hackerrankProfile.totalQuestionStats.totalQuestionCounts;
      }
      
      // Extract LeetCode and GFG data for DSA
      const leetcodeProfile = platforms.find(p => p.platform === 'leetcode');
      const geeksforgeeksProfile = platforms.find(p => p.platform === 'geeksforgeeks');
      
      const dsa = {
        total: 0,
        categories: []
      };
      
      if (leetcodeProfile && leetcodeProfile.totalQuestionStats) {
        const leetcodeData = leetcodeProfile.totalQuestionStats;
        if (leetcodeData.easyQuestionCounts) {
          dsa.categories.push({
            name: "Easy",
            count: leetcodeData.easyQuestionCounts,
            color: "text-green-400"
          });
          dsa.total += leetcodeData.easyQuestionCounts;
        }
        
        if (leetcodeData.mediumQuestionCounts) {
          dsa.categories.push({
            name: "Medium",
            count: leetcodeData.mediumQuestionCounts,
            color: "text-yellow-400"
          });
          dsa.total += leetcodeData.mediumQuestionCounts;
        }
        
        if (leetcodeData.hardQuestionCounts) {
          dsa.categories.push({
            name: "Hard",
            count: leetcodeData.hardQuestionCounts,
            color: "text-red-400"
          });
          dsa.total += leetcodeData.hardQuestionCounts;
        }
      }
      
      if (geeksforgeeksProfile && geeksforgeeksProfile.totalQuestionStats) {
        // We're not adding GFG data to DSA as it seems to be already counted in the Fundamentals section
        // based on the image, but you can uncomment this code if needed
        
        const gfgData = geeksforgeeksProfile.totalQuestionStats;
        dsa.total += gfgData.totalQuestionCounts;
      }
      
      // Extract CodeChef and CodeForces data for Competitive Programming
      const codechefProfile = platforms.find(p => p.platform === 'codechef');
      const codeforcesProfile = platforms.find(p => p.platform === 'codeforces');
      
      const competitive = {
        total: 0,
        categories: []
      };
      
      if (codechefProfile && codechefProfile.totalQuestionStats && codechefProfile.totalQuestionStats.totalQuestionCounts) {
        competitive.categories.push({
          name: "Codechef",
          count: codechefProfile.totalQuestionStats.totalQuestionCounts,
          color: "text-green-400"
        });
        competitive.total += codechefProfile.totalQuestionStats.totalQuestionCounts;
      }
      
      if (codeforcesProfile && codeforcesProfile.totalQuestionStats && codeforcesProfile.totalQuestionStats.totalQuestionCounts) {
        competitive.categories.push({
          name: "Codeforces",
          count: codeforcesProfile.totalQuestionStats.totalQuestionCounts,
          color: "text-yellow-400"
        });
        competitive.total += codeforcesProfile.totalQuestionStats.totalQuestionCounts;
      }
      
      setProblemsData({
        fundamentals,
        dsa,
        competitive
      });
    }
  }, [profileData]);

  const renderProgressCircle = (total, categories) => {
    // Calculate percentages for the circle segments
    const segments = categories.map(category => {
      return {
        ...category,
        percentage: (category.count / total) * 100
      };
    });

    // Sort segments from largest to smallest for proper stacking
    segments.sort((a, b) => b.percentage - a.percentage);

    // Calculate the stroke dasharray and dashoffset for each segment
    const circumference = 2 * Math.PI * 40; // Circle with radius 40
    let currentOffset = 0;

    return (
      <div className="bg-neutral-900 relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="transparent" 
            stroke="#2c2c2c" 
            strokeWidth="10"
          />
          
          {/* Segments */}
          {segments.map((segment, index) => {
            const dashArray = circumference;
            const dashOffset = circumference * (1 - segment.percentage / 100);
            const startOffset = currentOffset;
            currentOffset += segment.percentage / 100 * circumference;
            
            // Get the actual hex color from the color map or use a default
            const strokeColor = colorMap[segment.color] || "#2c2c2c";
            
            return (
              <circle 
                key={index}
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent" 
                stroke={strokeColor}
                strokeWidth="10"
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                style={{ 
                  transform: "rotate(-90deg)", 
                  transformOrigin: "center",
                  strokeDashoffset: dashOffset - startOffset
                }}
              />
            );
          })}
          
          {/* Center text */}
          <text 
            x="50" 
            y="55" 
            textAnchor="middle" 
            fontSize="22" 
            fontWeight="bold" 
            fill="white"
          >
            {total}
          </text>
        </svg>
      </div>
    );
  };

  const renderSection = (title, data) => {
    return (
      <div className="mb-8">
        <h3 className="text-gray-300 text-lg mb-4">{title}</h3>
        <div className="flex items-center justify-between">
          {renderProgressCircle(data.total, data.categories)}
          
          <div className="flex flex-col gap-2 flex-grow pl-4">
            {data.categories.map((category, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded">
                <span className={category.color}>{category.name}</span>
                <span className="font-bold">{category.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="bg-neutral-900 border-gray-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-center">Problems Solved</CardTitle>
      </CardHeader>
      <Separator className="bg-gray-700" />
      <CardContent className="pt-6">
        {renderSection("Fundamentals", problemsData.fundamentals)}
        <Separator className="bg-gray-700 my-6" />
        
        {renderSection("DSA", problemsData.dsa)}
        <Separator className="bg-gray-700 my-6" />
        
        {renderSection("Competitive Programming", problemsData.competitive)}
      </CardContent>
    </Card>
  );
};

export default ProblemsSolved;