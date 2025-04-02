import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';
import { Huddle } from '@/utils/types/project';

interface HuddlesListProps {
  huddles: Huddle[];
  onJoin: (id: string) => void;
}

const HuddlesList: React.FC<HuddlesListProps> = ({ huddles, onJoin }) => {
  const formatTime = (date: Date | string): string => {
    const time = typeof date === 'string' ? new Date(date) : date
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <div className="space-y-4">
      {huddles.map((huddle) => (
        <div key={huddle.id} className="bg-gray-700 rounded-lg p-4 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-white">{formatTime(huddle.time)}</div>
            <div className="text-xs text-gray-400 mb-2">{huddle.title}</div>
            <div className="flex -space-x-2 overflow-hidden">
              {huddle.participants.map((participant, index) => (
                <Image
                  key={index}
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-800"
                  src={participant.avatar}
                  alt={participant.name}
                  width={24}
                  height={24}
                />
              ))}
            </div>
          </div>
          <Button variant="link" onClick={() => onJoin(huddle.id)} className="text-blue-400 hover:text-blue-300 join-button">
            Join
          </Button>
        </div>
      ))}
    </div>
  );
};

export default HuddlesList; 