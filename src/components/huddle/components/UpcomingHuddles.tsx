import React from 'react';
import { Button } from '@/components/components/ui/button';
import HuddleCard from './HuddleCard';
import { UpcomingHuddle } from '@/mockData/huddleData';

interface UpcomingHuddlesProps {
  huddles: UpcomingHuddle[];
}

const UpcomingHuddles: React.FC<UpcomingHuddlesProps> = ({ huddles }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Huddles</h2>
        <Button variant="link" className="text-blue-500 hover:text-blue-600">View all</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {huddles.map((huddle) => (
          <HuddleCard 
            key={huddle.id}
            title={huddle.title} 
            time={`${new Date(huddle.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${new Date(huddle.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`} 
            date={huddle.date} 
            status={huddle.status}
            participants={huddle.participants.map(p => p.avatar)}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingHuddles;
