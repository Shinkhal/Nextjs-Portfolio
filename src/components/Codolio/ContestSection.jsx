export default function ContestSection({ profileData }) {
    const contestCount = profileData.platformProfiles.platformProfiles.reduce((count, platform) => {
      return count + (platform.contestActivityStats?.contestActivityList?.length || 0);
    }, 0);
  
    return (
      <div className="bg-neutral-900 rounded-lg p-6 shadow-lg h-full w-full">
        <h2 className="text-lg text-gray-300 mb-4">Total Contests</h2>
        <div className="text-4xl font-bold">{contestCount}</div>
      </div>
    );
  }