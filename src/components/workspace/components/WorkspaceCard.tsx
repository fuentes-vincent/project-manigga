'use client'

import React from 'react';
import { Workspace } from '../../../mockData/workspaceData';
import { MoreVertical } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface WorkspaceCardProps {
  workspace: Workspace;
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ workspace }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/dashboard/${workspace.id}`);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking the menu
    // Handle menu click logic here
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`${workspace.color} dark:opacity-80 w-10 h-10 rounded-md flex items-center justify-center text-lg font-semibold`}>
          {workspace.letter}
        </div>
        <button 
          className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
          onClick={handleMenuClick}
        >
          <MoreVertical size={20} />
        </button>
      </div>
      
      <h3 className="text-lg font-semibold mb-1 dark:text-white">{workspace.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{workspace.description}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {workspace.members.slice(0, 3).map((member) => (
            <Image 
              key={member.id} 
              src={member.avatar}
              alt={member.name}
              className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800"
              width={28}
              height={28}
            />
          ))}
          {workspace.members.length > 3 && (
            <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-gray-600 dark:text-gray-300">
              +{workspace.members.length - 3}
            </div>
          )}
        </div>
        <span className="text-xs text-gray-400 dark:text-gray-500">{workspace.lastActivity}</span>
      </div>
    </div>
  );
};

export default WorkspaceCard;
