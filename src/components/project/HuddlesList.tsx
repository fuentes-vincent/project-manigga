import React from 'react';
import { Huddle, User } from '../../utils/types/project';

interface HuddlesListProps {
  huddles: Huddle[];
  onJoin?: (huddleId: string) => void;
}

const AvatarGroup: React.FC<{ users: User[], max?: number }> = ({ users, max = 3 }) => {
  const displayUsers = users.slice(0, max);
  const remainingCount = users.length - max;
  
  return (
    <div className="flex -space-x-1">
      {displayUsers.map((user) => (
        <div 
          key={user.id} 
          className="w-6 h-6 rounded-full border-2 border-gray-800 overflow-hidden"
        >
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-medium border-2 border-gray-800 text-white">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export const HuddlesList: React.FC<HuddlesListProps> = ({ huddles, onJoin }) => {
  return (
    <div className="space-y-4">
      {huddles.map((huddle) => {
        const formattedTime = new Date(huddle.time).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        
        return (
          <div key={huddle.id} className="bg-gray-800 rounded-lg p-4">
            <div className="text-sm font-medium text-white mb-1">
              {formattedTime}
            </div>
            
            <div className="text-base font-medium text-gray-300 mb-2">
              {huddle.title}
            </div>
            
            <div className="flex justify-between items-center">
              <AvatarGroup users={huddle.participants} />
              
              {onJoin && (
                <button 
                  onClick={() => onJoin(huddle.id)}
                  className="text-xs font-medium join-button"
                >
                  Join
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HuddlesList; 