import { useEffect, useState } from 'react';
import { Star, GitBranch, Github, Code, Calendar, Award, Activity } from 'lucide-react';
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
        const response = await fetch('https://api.codolio.com/github/profile?userKey=shinkhal');
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
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Skeleton for Left Card */}
          <div className="lg:w-1/3">
            <div className="bg-neutral-900 rounded-xl shadow-lg p-6 border border-slate-800">
              <div className="flex flex-col items-center text-center mb-6">
                <Skeleton className="h-20 w-20 rounded-full mb-4" />
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-24 mb-4" />
                
                <div className="w-full h-px bg-slate-800 my-4"></div>
                
                <div className="grid grid-cols-1 gap-4 w-full">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="bg-slate-800/50 p-4 rounded-lg flex items-center">
                      <Skeleton className="h-8 w-8 rounded-lg mr-4" />
                      <div className="text-left w-full">
                        <Skeleton className="h-3 w-24 mb-2" />
                        <Skeleton className="h-5 w-12" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Skeleton for Center Card */}
          <div className="lg:w-2/3">
            <div className="bg-neutral-900 rounded-xl shadow-lg p-6 border border-slate-800 mb-6">
              <Skeleton className="h-8 w-60 mb-6" />
              <Skeleton className="h-40 w-full mb-6 rounded-lg" />
              
              <Skeleton className="h-8 w-48 mb-4" />
              <Skeleton className="h-8 w-full mb-6 rounded-lg" />
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                  <Skeleton key={i} className="h-16 rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-red-900 border border-red-700 p-4 rounded-md text-red-100">
        <h2 className="font-bold">Error loading data</h2>
        <p>{error}</p>
      </div>
    </div>
  );

  if (!userData) return null;

  return (
    <div className="container mx-auto px-4 py-8 text-slate-200">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Card - Profile Information */}
        <div className="lg:w-1/3">
          <div className="bg-neutral-900 rounded-xl shadow-lg p-6 border border-slate-800 sticky top-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-5 rounded-full mb-4">
                <Github size={48} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">{userData.githubProfile}</h1>
              <p className="text-slate-400 text-sm">User #{userData.userId}</p>
              
              <div className="w-full h-px bg-slate-800 my-4"></div>
              
              <div className="grid grid-cols-1 gap-4 w-full">
                <div className="bg-slate-800/50 p-4 rounded-lg flex items-center">
                  <div className="bg-yellow-500/20 p-2 rounded-lg mr-4">
                    <Star size={18} className="text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400">Total Stars</p>
                    <p className="font-semibold">{userData.stars}</p>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg flex items-center">
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-4">
                    <GitBranch size={18} className="text-blue-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400">Issues Created</p>
                    <p className="font-semibold">{userData.issues}</p>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg flex items-center">
                  <div className="bg-purple-500/20 p-2 rounded-lg mr-4">
                    <Code size={18} className="text-purple-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400">Total Commits</p>
                    <p className="font-semibold">{formatNumber(userData.commitCounts)}</p>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg flex items-center">
                  <div className="bg-green-500/20 p-2 rounded-lg mr-4">
                    <Activity size={18} className="text-green-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400">Contributions</p>
                    <p className="font-semibold">{formatNumber(userData.totalContributions)}</p>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg flex items-center">
                  <div className="bg-emerald-500/20 p-2 rounded-lg mr-4">
                    <Calendar size={18} className="text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400">Active Days</p>
                    <p className="font-semibold">{userData.totalActiveDays}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Center Card - Dashboard Content */}
        <div className="lg:w-2/3">
          <div className="bg-neutral-900 rounded-xl shadow-lg p-6 border border-slate-800 mb-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Award size={20} className="text-indigo-400 mr-2" />
              GitHub Activity Overview
            </h2>
            
              <GitHubCalendarComponent username="Shinkhal" />
            
            
            <div className="bg-slate-800/50 rounded-lg p-4 mt-6">
              <h3 className="text-lg font-semibold text-slate-300 mb-4">Language Distribution</h3>
              
              <div className="h-8 w-full flex rounded-lg overflow-hidden mb-4">
                {languageData.map((lang, i) => (
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
                {languageData.slice(0, 8).map((lang, i) => (
                  <div key={i} className="flex items-center gap-2 bg-neutral-800 p-3 rounded-lg">
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: lang.color }}
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-medium block truncate">{lang.name}</span>
                      <span className="text-xs text-slate-400 block">
                        {lang.percentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}