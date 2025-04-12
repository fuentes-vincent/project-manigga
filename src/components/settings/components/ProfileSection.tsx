import React from 'react';
import Image from 'next/image';
import { Camera, CheckCircle } from 'lucide-react';
import { userProfileData } from '@/mockData/settingsData';

interface ProfileSectionProps {
  name: string;
  avatarUrl: string;
  onPhotoChange?: () => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ name, avatarUrl, onPhotoChange = () => {} }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Profile</h2>
      <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="relative mb-4 md:mb-0">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow">
            <Image 
              src={avatarUrl || userProfileData.avatar} 
              alt={name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Verified badge - moved to top-right corner */}
          <div className="absolute top-0 right-0 bg-blue-500 text-white p-1 rounded-full shadow-md">
            <CheckCircle className="h-4 w-4" />
          </div>
        </div>
        
        <div className="md:ml-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{name}</h3>
            {/* Can add role or other info here */}
          </div>
          
          <button 
            onClick={onPhotoChange}
            className="inline-flex items-center px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors"
          >
            <Camera className="h-4 w-4 mr-2" />
            Change photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
