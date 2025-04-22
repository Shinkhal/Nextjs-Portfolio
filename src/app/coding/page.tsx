"use client";
import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import StatsOverview from "@/components/Codolio/StatsOverview";
import ActivityHeatmap from "@/components/Codolio/ActivityHeatmap";
import ContestSection from '@/components/Codolio/ContestSection';
import RatingHistory from '@/components/Codolio/RatingHistory';
import PlatformStats from '@/components/Codolio/PlatformStats';
import AwardsSection from '@/components/Codolio/AwardsSection';
import ProblemsSolved from "@/components/Codolio/ProblemsSolved";
import GitHubUserDashboard from "@/components/Codolio/GitHubUserDashboard";
import { Skeleton } from "@/components/ui/skeleton";
import BlurFade from "@/components/magicui/blur-fade";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://api.codolio.com/profile?userKey=shinkhal');
        const data = await response.json();
        setProfileData(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handlePlatformSelect = useCallback((platform) => {
    setSelectedPlatform(platform === selectedPlatform ? null : platform);
    
    if (platform !== selectedPlatform) {
      setTimeout(() => {
        const ratingSection = document.getElementById('rating-history-section');
        if (ratingSection) {
          ratingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [selectedPlatform]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-48 w-full rounded-xl bg-gray-800 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">


            
            {/* Left column skeletons */}
            <div className="md:col-span-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Skeleton className="h-48 w-full rounded-xl bg-gray-800" />
                <Skeleton className="h-48 w-full rounded-xl bg-gray-800" />
              </div>
              <div className="mt-6">
                <Skeleton className="h-96 w-full rounded-xl bg-gray-800" />
              </div>
            </div>
            
            {/* Right column skeletons */}
            <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-3">
                <Skeleton className="h-64 w-full rounded-xl bg-gray-800 mb-6" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Skeleton className="h-52 w-full rounded-xl bg-gray-800" />
                  <Skeleton className="h-52 w-full rounded-xl bg-gray-800" />
                </div>

                <div className="mt-6">
                  <Skeleton className="h-80 w-full rounded-xl bg-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="text-xl font-semibold">Failed to load profile data</div>
          <button 
            className="mt-4 px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <StarsBackground />
      <ShootingStars />
      <Head>
        <title>{profileData.firstName} {profileData.secondName} - Coding Profile</title>
        <meta name="description" content="Coding profile dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <div className="container mx-auto px-4 py-8">
                
                  <BlurFade>
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-gradient-purple">
                      Coding Achievements
                    </h1>
                    
                    <div className="max-w-3xl mx-auto text-center mb-16">
                      <p className="text-lg text-gray-300">
                        In this section, I highlight my coding achievements that illustrate my proficiency in 
                        software development and competitive programming. From solving complex problems on 
                        LeetCode to contributing to projects on GitHub, each score and contribution represents 
                        my passion for coding and problem-solving.
                      </p>
                    </div>
                    
                    <div className="space-y-16">
                     
                    </div>
                  </BlurFade>
              
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div className="md:col-span-1">
            {/* <ProfileHeader profileData={profileData} /> */}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <StatsOverview profileData={profileData} />
              <ContestSection profileData={profileData} />
            </div>
            <div className="mt-6">
              <ProblemsSolved profileData={profileData} />
            </div>
          </div>
  
         
          <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:col-span-3">
              <ActivityHeatmap profileData={profileData} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AwardsSection profileData={profileData} />
                <PlatformStats 
                  platformProfiles={profileData.platformProfiles} 
                  onPlatformSelect={handlePlatformSelect}
                  selectedPlatform={selectedPlatform}
                />
              </div>

              <div id="rating-history-section" className="mt-6">
                <RatingHistory 
                  profileData={profileData} 
                  platform={selectedPlatform} 
                />
              </div>

            </div>
          </div>

        </div>
        <div className='mt-6'>
                <GitHubUserDashboard/>
              </div>
      </div>
    </div>
  );
}