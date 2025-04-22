import React, { useEffect, useState } from "react";
import Image from "next/image";

const CodeforcesCard = ({ handle = "shinkhal" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodeforcesStats = async () => {
      try {
        const response = await fetch(
          `https://codeforces.com/api/user.info?handles=${handle}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Codeforces data");
        }
        const result = await response.json();
        setData(result.result[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCodeforcesStats();
  }, [handle]);
  
  // Helper function to determine rank color
  const getRankColor = (rank) => {
    if (!rank) return "text-gray-400";
    
    const rankColors = {
      'newbie': 'text-gray-400',
      'pupil': 'text-green-500',
      'specialist': 'text-cyan-500',
      'expert': 'text-blue-500',
      'candidate master': 'text-purple-500',
      'master': 'text-orange-500',
      'international master': 'text-orange-400',
      'grandmaster': 'text-red-500',
      'international grandmaster': 'text-red-600',
      'legendary grandmaster': 'text-red-700'
    };
    
    return rankColors[rank.toLowerCase()] || 'text-white';
  };

  return (
    <section className="rounded-xl border border-gray-800 bg-black/50 p-6 shadow-lg backdrop-blur-sm">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-purple-400">
        CodeForces Stats
      </h2>

      {loading ? (
        <div className="text-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-400 border-r-transparent"></div>
          <p className="mt-4 text-gray-400">Loading CodeForces stats...</p>
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-red-500">Error: {error}</p>
          <p className="mt-2 text-gray-400">Unable to load CodeForces statistics</p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:items-stretch gap-6">
          <div className="w-full md:w-1/3 bg-gray-900/60 rounded-lg p-6 flex flex-col items-center">
            {data.titlePhoto && (
              <div className="w-24 h-24 mb-4 relative overflow-hidden rounded-full border-2 border-gray-700">
                <Image
                  src={data.titlePhoto}
                  alt={data.handle}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            
            <h3 className="text-xl font-bold">{data.handle}</h3>
            <p className="text-gray-400 mb-4">{data.firstName || ""} {data.lastName || ""}</p>
            
            <div className={`text-lg font-medium ${getRankColor(data.rank)}`}>
              {data.rank || "Unranked"}
            </div>
            <div className="text-2xl font-bold mt-1">
              {data.rating || "N/A"}
            </div>
          </div>
          
          <div className="w-full md:w-2/3 bg-gray-900/60 rounded-lg p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 text-center rounded bg-gray-800/50">
                <p className="text-sm text-gray-400">Max Rating</p>
                <p className={`text-lg font-bold ${getRankColor(data.maxRank)}`}>
                  {data.maxRating || "N/A"}
                </p>
                <p className="text-xs text-gray-500">
                  {data.maxRank || ""}
                </p>
              </div>
              
              <div className="p-4 text-center rounded bg-gray-800/50">
                <p className="text-sm text-gray-400">Contribution</p>
                <p className={`text-lg font-bold ${data.contribution >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {data.contribution || "0"}
                </p>
              </div>
              
              <div className="p-4 text-center rounded bg-gray-800/50">
                <p className="text-sm text-gray-400">Friends</p>
                <p className="text-lg font-bold">
                  {data.friendOfCount || "0"}
                </p>
              </div>
              
              {data.organization && (
                <div className="p-4 text-center rounded bg-gray-800/50">
                  <p className="text-sm text-gray-400">Organization</p>
                  <p className="text-lg font-bold">
                    {data.organization}
                  </p>
                </div>
              )}
              
              {data.country && (
                <div className="p-4 text-center rounded bg-gray-800/50">
                  <p className="text-sm text-gray-400">Country</p>
                  <p className="text-lg font-bold">
                    {data.country}
                  </p>
                </div>
              )}
              
              {data.city && (
                <div className="p-4 text-center rounded bg-gray-800/50">
                  <p className="text-sm text-gray-400">City</p>
                  <p className="text-lg font-bold">
                    {data.city}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <a 
          href={`https://codeforces.com/profile/${handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-400 hover:text-purple-300"
        >
          <span>View my CodeForces profile</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CodeforcesCard;