import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export const GitHubCalendarComponent = ({ username }) => {
  // Define the theme correctly according to the library's requirements
  const theme = {
    dark: [
      '#161b22',  // level 0 (empty cells)
      '#0e4429',  // level 1
      '#006d32',  // level 2
      '#26a641',  // level 3
      '#39d353'   // level 4
    ]
  };

  return (
    <section className="rounded-xl border border-gray-800 bg-black/50 p-6 shadow-lg backdrop-blur-sm">
      
      <div className="flex justify-center overflow-x-auto pb-4">
        <GitHubCalendar 
          username={username}
          theme={theme}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          hideColorLegend={false}
          labels={{
            totalCount: "{{count}} contributions in the last year"
          }}
        />
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>View my complete contribution history on <a href={`https://github.com/${username}`} className="text-indigo-400 hover:text-indigo-300 underline" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </section>
  );
};

export default GitHubCalendarComponent