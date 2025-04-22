import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, AlignLeft, BarChart, Award, Terminal, Github } from 'lucide-react';

const PlatformStats = ({ platformProfiles, onPlatformSelect, selectedPlatform }) => {
  if (!platformProfiles || !platformProfiles.platformProfiles) {
    return (
      <Card className="bg-gray-900 text-white border-0 rounded-xl shadow-lg p-6">
        <CardContent className="pt-6">
          <p className="text-center text-gray-400">No platform data available</p>
        </CardContent>
      </Card>
    );
  }

  const sortedPlatforms = [...platformProfiles.platformProfiles].sort((a, b) => {
    const aCount = a.totalQuestionStats?.totalQuestionCounts || 0;
    const bCount = b.totalQuestionStats?.totalQuestionCounts || 0;
    return bCount - aCount;
  });

  const handlePlatformClick = (platform) => {
    if (onPlatformSelect) {
      onPlatformSelect(platform);
    }
  };

  const totalContests = sortedPlatforms.reduce((count, platform) => {
    return count + (platform.contestActivityStats?.contestActivityList?.length || 0);
  }, 0);

  const platformsWithContests = sortedPlatforms.filter(
    platform => (platform.contestActivityStats?.contestActivityList?.length || 0) > 0
  );

  return (
    <Card className="bg-neutral-900 text-white border-0 rounded-xl shadow-lg">
      <CardContent className="p-8">
        <div className="flex">
          <div className="flex-1">
            <h2 className="text-xl font-medium text-gray-400">Total Contests</h2>
            <div className="text-8xl font-bold text-white pt-4">
              {totalContests}
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            {platformsWithContests.map((platform) => {
              const platformName = getPlatformDisplayName(platform.platform);
              const contestCount = platform.contestActivityStats?.contestActivityList?.length || 0;
              const isSelected = selectedPlatform === platform.platform;
              
              return (
                <div 
                  key={platform.platform} 
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                    isSelected 
                      ? 'bg-indigo-900 text-white' 
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                  onClick={() => handlePlatformClick(platform.platform)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 flex items-center justify-center ${isSelected ? 'text-indigo-300' : 'text-gray-400'}`}>
                      {getPlatformIcon(platform.platform)}
                    </div>
                    <span className={isSelected ? 'text-white font-medium' : 'text-gray-300'}>
                      {platformName}
                    </span>
                  </div>
                  <span className={`font-medium ${isSelected ? 'text-indigo-200' : 'text-gray-400'}`}>
                    {contestCount}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper function to get proper platform display name
const getPlatformDisplayName = (platform) => {
  const displayNames = {
    'leetcode': 'LeetCode',
    'geeksforgeeks': 'GeeksForGeeks',
    'codeforces': 'CodeForces',
    'hackerrank': 'HackerRank',
    'codechef': 'CodeChef',
    'github': 'GitHub'
  };
  
  return displayNames[platform] || platform;
};

// Platform icons using Lucide React icons
const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'leetcode':
      return <Code size={20} />;
    case 'codechef':
      return <Terminal size={20} />;
    case 'codeforces':
      return <BarChart size={20} />;
    case 'geeksforgeeks':
      return <AlignLeft size={20} />;
    case 'hackerrank':
      return <Award size={20} />;
    case 'github':
      return <Github size={20} />;
    default:
      return <Terminal size={20} />;
  }
};

export default PlatformStats;