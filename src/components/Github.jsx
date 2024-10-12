import React from 'react';
import GitHubCalendar from 'react-github-calendar'; // default export

const GitHubCalendarComponent = ({ username }) => {
  return (
    <main className='container mx-auto max-w-screen-xl pb-20 mt-10 backdrop-blur-lg'>
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-red-400 font-bold mb-8 text-center">
        GitHub Contributions
      </h3>
      <div className="container mx-auto max-w-screen-lg p-6 text-white border border-gray-300 shadow-2xl shadow-indigo-500/40 rounded-lg">
        <GitHubCalendar username={username} />
      </div>
    </main>
  );
};

export default GitHubCalendarComponent;
