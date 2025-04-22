import React from 'react';

const LeetCodeCalendar = () => {
  
  return (
    <section className="rounded-xl border border-gray-800 bg-black/50 p-6 shadow-lg backdrop-blur-sm">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-400 font-bold mb-8 text-center">LeetCode Stats</h2>
        <div className="container mx-auto max-w-screen-xl p-6 rounded-lg flex text-white justify-center ">
          <img
            src="https://leetcard.jacoblin.cool/shinkhal?theme=dark&font=Montserrat&ext=heatmap"
            alt="LeetCode Stats"
            className='border border-gray-300 shadow-2xl shadow-indigo-500/40 rounded-lg'
          />
        </div>
        <div className="mt-6 text-center">
        <a 
          href={`https://leetcode.com/u/Shinkhal`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
        >
          <span>View my LeetCode profile</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

    </section>
      );
    };

export default LeetCodeCalendar;
