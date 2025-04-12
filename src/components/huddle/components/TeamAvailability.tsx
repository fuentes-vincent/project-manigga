import React from 'react';
import TeamMemberStatus from './TeamMemberStatus';
import { TeamMember } from '@/mockData/huddleData';

interface TeamAvailabilityProps {
  members: TeamMember[];
}

const TeamAvailability: React.FC<TeamAvailabilityProps> = ({ members }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Team Availability</h3>
      <div className="space-y-2">
        {members.map((member) => (
          <TeamMemberStatus 
            key={member.id}
            name={member.name} 
            status={member.status} 
            avatar={member.avatar}
            statusColor={member.statusColor}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamAvailability;
