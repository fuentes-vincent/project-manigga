import React from 'react';
import { User } from 'lucide-react';
import Image from 'next/image';

interface ActivityItemProps {
  user: string;
  action: string;
  time: string;
  avatar?: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ user, action, time, avatar }) => {
  return (
    <div className="flex items-start gap-3">
      {avatar ? (
        <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
          <Image 
            src={avatar} 
            alt={user} 
            className="h-full w-full object-cover"
            width={32}
            height={32}
          />
        </div>
      ) : (
        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
          <User className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </div>
      )}
      <div>
        <div className="text-sm text-gray-800 dark:text-gray-200">
          <span className="font-medium">{user}</span> {action}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{time}</div>
      </div>
    </div>
  );
};

export default ActivityItem;
