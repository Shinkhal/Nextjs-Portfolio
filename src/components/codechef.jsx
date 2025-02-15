import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Required for Chart.js v3+

const CodeChefCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodeChefStats = async () => {
      try {
        const response = await fetch(
          "https://codechef-api.vercel.app/handle/true_whisk_46"
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
  }, []);

  return (
    <>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-400 font-bold mb-8 text-center">CodeChef Stats</h2>
    <div className="container mx-auto max-w-4xl bg-black p-6 rounded-lg border border-gray-300 shadow-2xl shadow-indigo-500/40 text-white flex items-center">
      {loading ? (
          <p className="text-gray-400">Loading CodeChef stats...</p>
        ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <>
          {/* Left Section - Profile Info */}
          <div className="flex flex-col items-center w-1/3 p-4">
            <img
              src={data.profile}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300 shadow-2xl shadow-indigo-500/40"
            />
            <h3 className="text-xl font-bold mt-2">{data.name}</h3>
            <img
              src={data.countryFlag}
              alt={data.countryName}
              className="w-6 h-4 inline-block ml-2"
            />
            <p className="text-gray-300">Country: {data.countryName}</p>
            <p className="text-yellow-400">Stars: {data.stars}</p>
            <p className="text-gray-300">
              Rating: {data.currentRating ?? "Not Available"}
            </p>
            <p className="text-gray-300">
              Global Rank: {data.globalRank ?? "Not Available"}
            </p>
            <p className="text-gray-300">
              Country Rank: {data.countryRank ?? "Not Available"}
            </p>
          </div>

          {/* Right Section - Heatmap */}
          {data.heatMap.length > 0 && (
            <div className="w-2/3 p-4">
              <h4 className="text-lg font-semibold text-green-400 text-center">
                Activity Heatmap
              </h4>
              <Bar
                data={{
                  labels: data.heatMap.map((entry) => entry.date),
                  datasets: [
                      {
                          label: "Submissions",
                          data: data.heatMap.map((entry) => entry.value),
                          backgroundColor: data.heatMap.map((entry) =>
                            entry.value > 5
                          ? "rgba(255, 99, 132, 0.8)"
                          : entry.value > 2
                          ? "rgba(54, 162, 235, 0.8)"
                          : "rgba(75, 192, 192, 0.8)"
                      ),
                      borderColor: "rgba(255, 255, 255, 0.8)",
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false },
                },
                  scales: {
                    x: { grid: { display: false }, ticks: { color: "#ffffff" } },
                    y: { beginAtZero: true, ticks: { color: "#ffffff" } },
                },
            }}
              />
            </div>
          )}
        </>
      )}
    </div>
            </>
  );
};

export default CodeChefCard;
