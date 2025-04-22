import React, { useState } from 'react';
import Image from 'next/image';

const AwardsSection = ({ profileData }) => {
  const [showAllAwards, setShowAllAwards] = useState(false);

  // Collect all badges from all platforms
  const getAllBadges = () => {
    const badges = [];

    if (!profileData || !profileData.platformProfiles || !profileData.platformProfiles.platformProfiles) {
      return [];
    }

    profileData.platformProfiles.platformProfiles.forEach(platform => {
      if (platform.badgeStats && platform.badgeStats.badgeList) {
        platform.badgeStats.badgeList.forEach(badge => {
          badges.push({
            ...badge,
            platform: platform.platform,
            platformName: getPlatformDisplayName(platform.platform)
          });
        });
      }
    });

    return badges;
  };

  const badges = getAllBadges();
  const displayBadges = showAllAwards ? badges : badges.slice(0, 4);
  const badgeCount = badges.length;

  return (
    <div className="bg-neutral-900 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Awards</h2>
        <span className="text-3xl font-bold text-cyan-600">{badgeCount}</span>
      </div>

      {badges.length === 0 ? (
        <div className="text-gray-400 text-center py-4">No awards found</div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayBadges.map((badge, index) => (
              <div 
                key={`${badge.platform}-${badge.name}-${index}`} 
                className="flex flex-col items-center justify-center p-2"
              >
                <div className="relative">
                  {badge.icon ? (
                    <Image
                      src={getFullImageUrl(badge.icon)}  // Use the helper function here
                      alt={badge.name} 
                      width={64}  // Set width for image optimization
                      height={64} // Set height for image optimization
                      className="object-contain"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        {getBadgeInitials(badge.name)}
                      </span>
                    </div>
                  )}

                  {badge.stars && (
                    <div className="absolute bottom-0 right-0 bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {badge.stars}★
                    </div>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs font-medium truncate max-w-full" title={badge.name}>
                    {shortenBadgeName(badge.name)}
                  </p>
                  <p className="text-xs text-gray-400 capitalize">
                    {badge.platformName}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {badges.length > 4 && (
            <div className="text-center mt-4">
              <button 
                onClick={() => setShowAllAwards(!showAllAwards)}
                className="text-blue-400 text-sm hover:underline"
              >
                {showAllAwards ? 'show less' : 'show more'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// Helper functions
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

const getBadgeInitials = (name) => {
  if (!name) return '?';

  const words = name
    .split(' ')
    .filter(word => word.length > 0);

  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();

  return (words[0][0] + words[1][0]).toUpperCase();
};

const shortenBadgeName = (name) => {
  if (!name) return '';

  // If the name is already short enough, return it as is
  if (name.length <= 20) return name;

  // Otherwise shorten it
  return name.substring(0, 18) + '...';
};

// Helper function to prepend the base URL to the image path if it's relative
const getFullImageUrl = (url) => {
  if (url && url.startsWith('/static')) {
    return `https://leetcode.com${url}`;  // Prepend base URL
  }
  return url;  // If it's already a full URL, return as-is
};

export default AwardsSection;
