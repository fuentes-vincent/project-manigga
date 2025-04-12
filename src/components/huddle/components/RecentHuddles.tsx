import React from 'react';
import { Button } from '@/components/components/ui/button';
import RecordingCard from './RecordingCard';
import { RecentHuddle } from '@/mockData/huddleData';

interface RecentHuddlesProps {
  huddles: RecentHuddle[];
}

const RecentHuddles: React.FC<RecentHuddlesProps> = ({ huddles }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Huddles</h2>
        <Button variant="link" className="text-blue-500 hover:text-blue-600">View all</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {huddles.map((huddle) => (
          <RecordingCard 
            key={huddle.id}
            title={huddle.title} 
            date={huddle.date} 
            duration={`${huddle.duration} mins`}
            participants={huddle.participants}
            thumbnail={huddle.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentHuddles;
