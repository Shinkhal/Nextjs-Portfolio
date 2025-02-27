import React, { useEffect, useState } from "react";
import Image from "next/image";

const CodeforcesCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodeforcesStats = async () => {
      try {
        const response = await fetch(
          "https://codeforces.com/api/user.info?handles=shinkhal"
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
  }, []);

  return (
    <main className='container mx-auto max-w-screen-xl pb-20 mt-10 backdrop-blur-lg'>

      <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-400 font-bold mb-8 text-center">CodeForces Stats</h2>
    <div className="max-w-md mx-auto p-8 bg-black border border-gray-300 shadow-2xl shadow-indigo-500/40 rounded-lg text-white">
      {loading ? (
          <p className="text-gray-400 text-center">Loading...</p>
        ) : error ? (
            <p className="text-red-400 text-center">Error: {error}</p>
        ) : (
            <div className="flex flex-col items-center gap-6">
          <div className="relative w-28 h-28">
            <Image
              src={data.titlePhoto}
              alt="Profile"
              layout="fill"
              className="rounded-full border-4 border-white shadow-lg"
              />
          </div>
          <h3 className="text-2xl font-bold text-white">{data.handle}</h3>
          <p className="text-lg text-gray-300">{data.firstName || "N/A"}</p>
          <div className="grid grid-cols-2 gap-4 text-center mt-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-400">Rank</p>
              <p className="text-lg text-yellow-300 font-semibold">{data.rank}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-400">Rating</p>
              <p className="text-lg text-green-300 font-semibold">{data.rating}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-400">Max Rank</p>
              <p className="text-lg text-purple-300 font-semibold">{data.maxRank}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-400">Max Rating</p>
              <p className="text-lg text-pink-300 font-semibold">{data.maxRating}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-400">Contribution</p>
              <p className="text-lg text-white font-semibold">{data.contribution}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-400">Friends</p>
              <p className="text-lg text-white font-semibold">{data.friendOfCount}</p>
            </div>
          </div>
        </div>
      )}
    </div>
      </main>
  );
};

export default CodeforcesCard;