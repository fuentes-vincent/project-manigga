import React from 'react';
import { Button } from '@/components/components/ui/button';

interface TeamHeaderProps {
  onCreateTeam: () => void;
}

const TeamHeader: React.FC<TeamHeaderProps> = ({ onCreateTeam }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Teams</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage and collaborate with your teams</p>
      </div>
      <Button 
        onClick={onCreateTeam} 
        className="bg-blue-500 hover:bg-blue-600 text-white"
      >
        Create New Team
      </Button>
    </div>
  );
};

export default TeamHeader;
