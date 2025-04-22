'use client';

import React, { useState, useMemo } from 'react';
import { Tooltip } from '@/components/ui/tooltip';
import { 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { format, parseISO, subYears, eachDayOfInterval, getDay, isEqual, addDays } from 'date-fns';

export default function ActivityHeatmap({ profileData }) {
  const [hoveredDay, setHoveredDay] = useState(null);
  
  // Extract platform profiles
  const leetcodePlatform = profileData?.platformProfiles?.platformProfiles?.find(
    profile => profile.platform === 'leetcode'
  );
  const geeksforgeeksPlatform = profileData?.platformProfiles?.platformProfiles?.find(
    profile => profile.platform === 'geeksforgeeks'
  );
  const codeforcesPlatform = profileData?.platformProfiles?.platformProfiles?.find(
    profile => profile.platform === 'codeforces'
  );
  const codechefPlatform = profileData?.platformProfiles?.platformProfiles?.find(
    profile => profile.platform === 'codechef'
  );

  // Extract submission calendars
  const leetCodeCalendar = leetcodePlatform?.dailyActivityStatsResponse?.submissionCalendar || {};
  const geeksForGeeksCalendar = geeksforgeeksPlatform?.dailyActivityStatsResponse?.submissionCalendar || {};
  const codeForceCalendar = codeforcesPlatform?.dailyActivityStatsResponse?.submissionCalendar || {};
  const codeChefCalendar = codechefPlatform?.dailyActivityStatsResponse?.submissionCalendar || {};

  // Merge calendars
  const mergedCalendar = {};

  const mergeCalendars = (calendar) => {
    Object.entries(calendar).forEach(([timestamp, count]) => {
      const date = format(fromUnixTime(Number(timestamp)), 'yyyy-MM-dd');
      mergedCalendar[date] = (mergedCalendar[date] || 0) + Number(count);
    });
  };

  const fromUnixTime = (unixTime) => {
    return new Date(unixTime * 1000);
  }

  [leetCodeCalendar, geeksForGeeksCalendar, codeForceCalendar, codeChefCalendar].forEach(mergeCalendars);

  // Generate dates for the last year
  const today = new Date();
  const yearAgo = subYears(today, 1);
  
  // Create array of all dates in the interval
  const datesInterval = eachDayOfInterval({
    start: yearAgo,
    end: today
  });

  // Calculate stats
  const { totalSubmissions, longestStreak } = useMemo(() => {
    let total = 0;
    let currentStreak = 0;
    let maxStreak = 0;
    
    // Sort dates for streak calculation
    const activeDates = Object.keys(mergedCalendar)
      .filter(dateStr => mergedCalendar[dateStr] > 0)
      .sort()
      .map(dateStr => parseISO(dateStr));
    
    // Calculate total submissions
    Object.values(mergedCalendar).forEach(count => {
      total += count;
    });
    
    // Calculate longest streak
    if (activeDates.length > 0) {
      maxStreak = 1;
      currentStreak = 1;
      
      for (let i = 1; i < activeDates.length; i++) {
        const prevDate = activeDates[i-1];
        const nextDate = addDays(prevDate, 1);
        
        if (isEqual(nextDate, activeDates[i])) {
          currentStreak++;
        } else {
          maxStreak = Math.max(maxStreak, currentStreak);
          currentStreak = 1;
        }
      }
      
      // Check final streak
      maxStreak = Math.max(maxStreak, currentStreak);
    }
    
    return { totalSubmissions: total, longestStreak: maxStreak };
  }, [mergedCalendar]);

  // Get dates organized by week
  const weeks = [];
let currentWeek = [];
let currentMonth = null;

// First, determine how many empty cells we need at the beginning (to align with Sunday start)
const firstDay = datesInterval[0];
const firstDayOfWeek = getDay(firstDay); // 0 = Sunday, 1 = Monday, etc.

// Add empty cells to align the first day correctly
for (let i = 0; i < firstDayOfWeek; i++) {
  currentWeek.push(null);
}

// Now add all the dates
datesInterval.forEach(date => {
  const dayOfWeek = getDay(date);
  const month = format(date, 'MM'); // Get the month as 'MM'

  // Check if we are in a new month
  if (currentMonth !== month && currentMonth !== null) {
    // Add a gap after the previous month
    weeks.push('MONTH_BREAK'); // This will mark the gap between months
  }

  // Update the current month
  currentMonth = month;

  currentWeek.push(date);

  // If it's the end of the week (Saturday), push the current week and reset
  if (dayOfWeek === 6) { // Saturday, end of week
    weeks.push(currentWeek);
    currentWeek = [];
  }
});

// Add the last partial week if necessary
if (currentWeek.length > 0) {
  weeks.push(currentWeek);
}

// Function to determine cell color based on activity count
const getCellColor = (date) => {
  if (!date) return 'bg-black';

  const dateStr = format(date, 'yyyy-MM-dd');
  const count = mergedCalendar[dateStr] || 0;

  if (count === 0) return 'bg-slate-900';
  if (count < 3) return 'bg-green-900';
  if (count < 5) return 'bg-green-700';
  if (count < 8) return 'bg-green-600';
  if (count < 10) return 'bg-green-500';
  return 'bg-green-400';
};

  // Function to get tooltip text
  const getTooltipText = (date) => {
    if (!date) return '';
    
    const dateStr = format(date, 'yyyy-MM-dd');
    const count = mergedCalendar[dateStr] || 0;
    const formattedDate = format(date, 'MMM d, yyyy');
    
    return `${count} submissions on ${formattedDate}`;
  };

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Calculate which months to display in the header
  const monthLabels = [];
  
  datesInterval.forEach(date => {
    const month = date.getMonth();
    if (month !== currentMonth) {
      currentMonth = month;
      monthLabels.push({
        month: months[month],
        index: monthLabels.length
      });
    }
  });

  return (
    <div className="p-6 bg-neutral-900/50 rounded-lg shadow-md border border-gray-800 mb-10">
      
      {/* Stats Section */}
      <div className="flex justify-between mb-6 border-b border-gray-800 pb-3">
        <div className="flex space-x-6">
          <div>
            <h3 className="text-xs text-gray-400">Total Submissions</h3>
            <p className="text-2xl font-bold text-white">{totalSubmissions}</p>
          </div>
          <div>
            <h3 className="text-xs text-gray-400">Longest Streak</h3>
            <p className="text-2xl font-bold text-white">{longestStreak} days</p>
          </div>
        </div>
      </div>
      
      {/* Month labels */}
      <div className="flex text-xs text-gray-500 mb-1 pl-10">
        {monthLabels.map((label, idx) => (
          <div key={idx} className="flex-1" style={{ marginLeft: idx === 0 ? '0' : '-10px' }}>
            {label.month}
          </div>
        ))}
      </div>
      
      <div className="flex">
  {/* Day of week labels */}
  <div className="flex flex-col justify-around pr-2 text-xs text-gray-500">
    <div>Mon</div>
    <div>Wed</div>
    <div>Fri</div>
  </div>

  {/* Heatmap grid */}
  <div className="flex-1 overflow-x-auto w-full">
    <div className="flex">
      {weeks.map((week, weekIndex) => {
        // Skip if week isn't an array (defensive check)
        if (!Array.isArray(week)) return null;

        const currentWeekFirstDay = week.find(day => day !== null);
        const previousWeekFirstDay =
          weekIndex > 0 && Array.isArray(weeks[weekIndex - 1])
            ? weeks[weekIndex - 1].find(day => day !== null)
            : null;

        const isNewMonth =
          currentWeekFirstDay &&
          previousWeekFirstDay &&
          format(currentWeekFirstDay, 'MM') !== format(previousWeekFirstDay, 'MM');

        return (
          <div
            key={weekIndex}
            className={`flex flex-col ${isNewMonth ? 'ml-3' : ''}`}
          >
            {week.map((day, dayIndex) => (
              <TooltipProvider key={dayIndex}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`w-3 h-3 m-0.5 rounded-sm ${getCellColor(day)} transition-colors hover:ring-1 hover:ring-green-300`}
                      onMouseEnter={() =>
                        setHoveredDay(day ? format(day, 'yyyy-MM-dd') : null)
                      }
                      onMouseLeave={() => setHoveredDay(null)}
                    />
                  </TooltipTrigger>
                  {day && (
                    <TooltipContent
                      side="top"
                      className="bg-gray-900 text-white text-xs py-1 px-2 rounded border border-gray-700"
                    >
                      {getTooltipText(day)}
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        );
      })}
    </div>
  </div>
</div> 
      {/* Legend */}
      <div className="flex items-center justify-end mt-4 text-xs text-gray-400">
        <span className="mr-2">Less</span>
        <div className="w-3 h-3 bg-green-900 mx-0.5 rounded-sm"></div>
        <div className="w-3 h-3 bg-green-800 mx-0.5 rounded-sm"></div>
        <div className="w-3 h-3 bg-green-700 mx-0.5 rounded-sm"></div>
        <div className="w-3 h-3 bg-green-500 mx-0.5 rounded-sm"></div>
        <div className="w-3 h-3 bg-green-400 mx-0.5 rounded-sm"></div>
        <span className="ml-2">More</span>
      </div>
    </div>
  );
}