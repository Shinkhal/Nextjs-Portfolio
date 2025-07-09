import { useEffect, useState } from 'react';
import { Star, Github, Code, Calendar, Activity, TrendingUp } from 'lucide-react';
import { GitHubCalendarComponent } from "@/components/Github";
import { Skeleton } from "@/components/ui/skeleton";

export default function GitHubUserDashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [languageData, setLanguageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/fetchgithub');
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        
        if (data.status.success) {
          setUserData(data.data);
          
          // Process language distribution data
          const languages = Object.entries(data.data.languageDistributions || {});
          const total = languages.reduce((acc, [, value]) => acc + value, 0);
          
          // Sort languages by value (descending)
          const sortedLanguages = languages
            .map(([name, value]) => ({ 
              name, 
              value,
              percentage: (value / total) * 100,
              color: getLanguageColor(name)
            }))
            .sort((a, b) => b.value - a.value);
          
          setLanguageData(sortedLanguages);
        } else {
          throw new Error(data.status.message || 'API returned error');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      TypeScript: '#3178c6',
      JavaScript: '#f7df1e',
      HTML: '#e34c26',
      CSS: '#264de4',
      Python: '#3572A5',
      PHP: '#777bb4',
      'C++': '#f34b7d',
      C: '#555555',
      Hack: '#4d41b1',
      Dockerfile: '#384d54',
      Blade: '#f7523f'
    };
    
    return colors[language] || '#6b7280'; 
  };

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || '0';
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 space-y-4">
        {/* Header Skeleton */}
        <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
          <div className="flex items-center gap-4">
            <Skeleton className="h-16 w-16 rounded-2xl" />
            <div className="flex-1">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-16 mb-1" />
                  <Skeleton className="h-3 w-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <Skeleton className="h-80 rounded-2xl" />
          </div>
          <div>
            <Skeleton className="h-80 rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  if (error) return (
    <div className="container mx-auto px-4">
      <div className="bg-red-900/20 border border-red-700/50 p-4 rounded-2xl text-red-100">
        <h2 className="font-bold">Error loading data</h2>
        <p>{error}</p>
      </div>
    </div>
  );

  if (!userData) return null;

  const stats = [
    { icon: Star, label: 'Stars', value: userData.stars, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { icon: Code, label: 'Commits', value: formatNumber(userData.commitCounts), color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { icon: Activity, label: 'Contributions', value: formatNumber(userData.totalContributions), color: 'text-green-400', bg: 'bg-green-400/10' },
    { icon: Calendar, label: 'Active Days', value: userData.totalActiveDays, color: 'text-purple-400', bg: 'bg-purple-400/10' }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      {/* Compact Header */}
      <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl">
              <Github size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{userData.githubProfile}</h1>
              <p className="text-gray-400 text-sm">User #{userData.userId}</p>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <div className={`p-1.5 rounded-lg ${stat.bg}`}>
                    <stat.icon size={16} className={stat.color} />
                  </div>
                  <span className="text-xs text-gray-400 hidden lg:block">{stat.label}</span>
                </div>
                <div className="font-bold text-lg text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 lg:hidden">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Calendar - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={20} className="text-indigo-400" />
              <h2 className="text-lg font-semibold text-white">Activity Overview</h2>
            </div>
            
            <div className="bg-neutral-900 rounded-xl p-4">
              <GitHubCalendarComponent username="Shinkhal" />
            </div>
          </div>
        </div>

        {/* Language Distribution - Takes 1 column */}
        <div className="lg:col-span-1">
          <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
            <div className="flex items-center gap-2 mb-4">
              <Code size={20} className="text-emerald-400" />
              <h2 className="text-lg font-semibold text-white">Languages</h2>
            </div>
            
            {/* Language Progress Bar */}
            <div className="h-3 w-full flex rounded-full overflow-hidden mb-4 bg-gray-800">
              {languageData.slice(0, 5).map((lang, i) => (
                <div 
                  key={i}
                  style={{ 
                    width: `${lang.percentage}%`, 
                    backgroundColor: lang.color 
                  }}
                  className="h-full transition-all duration-300 hover:opacity-80"
                  title={`${lang.name}: ${lang.percentage.toFixed(1)}%`}
                />
              ))}
            </div>
            
            {/* Language List */}
            <div className="space-y-2">
              {languageData.slice(0, 6).map((lang, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-gray-800/40 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-sm font-medium text-gray-200">{lang.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {lang.percentage.toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}