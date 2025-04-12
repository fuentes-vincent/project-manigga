import React from 'react';
import { User } from 'lucide-react';
import Image from 'next/image';

interface TeamMemberStatusProps {
  name: string;
  status: string;
  avatar?: string;
  statusColor?: string;
}

const TeamMemberStatus: React.FC<TeamMemberStatusProps> = ({ 
  name, 
  status, 
  avatar,
  statusColor 
}) => {
  // Determine status color class if not provided in props
  const getStatusColorClass = () => {
    if (statusColor) return statusColor;
    
    switch (status) {
      case "Available":
        return "bg-green-500";
      case "In a huddle":
        return "bg-yellow-500";
      case "Do not disturb":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center">
        {avatar ? (
          <div className="h-8 w-8 rounded-full overflow-hidden mr-2 relative">
            <Image 
              src={avatar} 
              alt={name} 
              className="h-full w-full object-cover"
              width={32}
              height={32}
            />
            <div className={`absolute bottom-0 right-0 h-3 w-3 ${getStatusColorClass()} rounded-full border-2 border-white`}></div>
          </div>
        ) : (
          <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-2 relative">
            <User className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <div className={`absolute bottom-0 right-0 h-3 w-3 ${getStatusColorClass()} rounded-full border-2 border-white dark:border-gray-800`}></div>
          </div>
        )}
        <span className="text-gray-800 dark:text-gray-200">{name}</span>
      </div>
      <span className="text-xs px-2 py-1 rounded-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700">
        {status}
      </span>
    </div>
  );
};

export default TeamMemberStatus;
