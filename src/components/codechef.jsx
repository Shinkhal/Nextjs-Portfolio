import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Required for Chart.js v3+

const CodeChefCard = ({ handle = "true_whisk_46" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodeChefStats = async () => {
      try {
        const response = await fetch(
          `https://codechef-api.vercel.app/handle/${handle}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch CodeChef data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCodeChefStats();
  }, [handle]);

  return (
    <section className="rounded-xl border border-gray-800 bg-black/50 p-6 shadow-lg backdrop-blur-sm">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-red-400 font-bold mb-6 text-center">
        CodeChef Stats
      </h2>

      {loading ? (
        <div className="text-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-red-400 border-r-transparent"></div>
          <p className="mt-4 text-gray-400">Loading CodeChef stats...</p>
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-red-500">Error: {error}</p>
          <p className="mt-2 text-gray-400">Unable to load CodeChef statistics</p>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Left Section - Profile Info */}
          <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center p-4 bg-gray-900/60 rounded-lg">
            {data.profile && (
              <img
                src={data.profile}
                alt="Profile"
                className="w-20 sm:w-24 h-20 sm:h-24 rounded-full border-2 border-gray-300 shadow-lg"
              />
            )}
            <h3 className="text-lg sm:text-xl font-bold mt-2">{data.name || handle}</h3>
            
            {data.countryFlag && data.countryName && (
              <div className="flex items-center gap-2 mt-1">
                <img
                  src={data.countryFlag}
                  alt={data.countryName}
                  className="w-5 h-3"
                />
                <p className="text-gray-300 text-sm sm:text-base">{data.countryName}</p>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4 mt-4 w-full">
              <div className="text-center p-2 bg-gray-800/50 rounded">
                <p className="text-xs text-gray-400">Stars</p>
                <p className="text-yellow-400 text-lg font-bold">{data.stars || "0"}</p>
              </div>
              
              <div className="text-center p-2 bg-gray-800/50 rounded">
                <p className="text-xs text-gray-400">Rating</p>
                <p className="text-white text-lg font-bold">{data.currentRating ?? "N/A"}</p>
              </div>
              
              <div className="text-center p-2 bg-gray-800/50 rounded">
                <p className="text-xs text-gray-400">Global</p>
                <p className="text-white text-lg font-bold">#{data.globalRank ?? "N/A"}</p>
              </div>
              
              <div className="text-center p-2 bg-gray-800/50 rounded">
                <p className="text-xs text-gray-400">Country</p>
                <p className="text-white text-lg font-bold">#{data.countryRank ?? "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Right Section - Heatmap */}
          {data.heatMap && data.heatMap.length > 0 && (
            <div className="w-full sm:w-1/2 md:w-2/3 p-4 bg-gray-900/60 rounded-lg">
              <h4 className="text-lg font-semibold text-green-400 text-center mb-4">
                Activity Heatmap
              </h4>
              <div className="h-64 overflow-x-auto">
                <Bar
                  data={{
                    labels: data.heatMap.map((entry) => entry.date),
                    datasets: [
                      {
                        label: "Submissions",
                        data: data.heatMap.map((entry) => entry.value),
                        backgroundColor: data.heatMap.map((entry) =>
                          entry.value > 5
                            ? "rgba(239, 68, 68, 0.8)" // red-500
                            : entry.value > 2
                            ? "rgba(59, 130, 246, 0.8)" // blue-500
                            : "rgba(45, 212, 191, 0.8)" // teal-400
                        ),
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                      tooltip: {
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        titleColor: "#ffffff",
                        bodyColor: "#ffffff",
                        callbacks: {
                          label: (context) => {
                            return `Submissions: ${context.raw}`;
                          }
                        }
                      }
                    },
                    scales: {
                      x: {
                        grid: { 
                          display: false,
                          color: "rgba(255, 255, 255, 0.1)" 
                        },
                        ticks: { 
                          color: "#ffffff",
                          maxRotation: 45,
                          minRotation: 45
                        },
                      },
                      y: {
                        beginAtZero: true,
                        grid: { color: "rgba(255, 255, 255, 0.1)" },
                        ticks: { color: "#ffffff" },
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-6 text-center">
        <a 
          href={`https://www.codechef.com/users/${handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-red-400 hover:text-red-300"
        >
          <span>View my CodeChef profile</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CodeChefCard;