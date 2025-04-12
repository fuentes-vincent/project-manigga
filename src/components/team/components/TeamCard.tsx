import React from 'react';
import Image from 'next/image';
import { MoreHorizontal } from 'lucide-react';
import { Team } from '@/mockData/teamData';
import { Button } from '@/components/components/ui/button';

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white" 
            style={{ backgroundColor: team.backgroundColor }}
          >
            <span className="text-lg">{team.icon}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{team.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{team.category}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
        <div>
          <div className="text-gray-500 dark:text-gray-400">Members</div>
          <div className="flex mt-1">
            {team.members.slice(0, 4).map((member, index) => (
              <div 
                key={member.id} 
                className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-700 overflow-hidden"
                style={{ marginLeft: index > 0 ? '-8px' : '0' }}
              >
                <Image 
                  src={member.avatar} 
                  alt={member.name} 
                  width={32} 
                  height={32} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {team.members.length > 4 && (
              <div 
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-600 border-2 border-white dark:border-gray-700 flex items-center justify-center text-xs text-gray-700 dark:text-gray-300"
                style={{ marginLeft: '-8px' }}
              >
                +{team.members.length - 3}
              </div>
            )}
          </div>
        </div>
        
        <div>
          <div className="text-gray-500 dark:text-gray-400">Projects</div>
          <div className="mt-1 font-medium text-gray-900 dark:text-white">{team.projects}</div>
        </div>
        
        <div>
          <div className="text-gray-500 dark:text-gray-400">Last Active</div>
          <div className="mt-1 text-gray-900 dark:text-white">{team.lastActive}</div>
        </div>
      </div>
      
      <Button variant="outline" className="w-full">View Details</Button>
    </div>
  );
};

export default TeamCard;
