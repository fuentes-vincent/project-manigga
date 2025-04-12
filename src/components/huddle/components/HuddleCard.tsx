import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HuddleCardProps {
  title: string;
  time: string;
  date: string;
  status: string;
  participants: string[];
}

const HuddleCard: React.FC<HuddleCardProps> = ({ 
  title, 
  time, 
  date, 
  status, 
  participants 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      {/* Time with clock icon */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
        <Clock className="h-4 w-4" />
        <span>{time}</span>
      </div>
      
      {/* Date with calendar icon */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <Calendar className="h-4 w-4" />
        <span>{date}</span>
      </div>
      
      {/* Title */}
      <h3 className="font-semibold mb-2">{title}</h3>
      
      {/* Participants avatars */}
      <div className="flex mb-4">
        <div className="flex -space-x-2">
          {participants.slice(0, 4).map((avatar, index) => (
            <div 
              key={index} 
              className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-700 overflow-hidden"
            >
              <Image 
                src={avatar} 
                alt={`Participant ${index + 1}`} 
                className="h-full w-full object-cover"
                width={32}
                height={32}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Status badge */}
      <div className="flex justify-between items-center mb-4">
        <span className={cn(
          "text-xs px-2 py-1 rounded-full",
          status === "In Progress" 
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" 
            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
        )}>
          {status}
        </span>
      </div>
      
      {/* Join button */}
      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
        Join Huddle
      </Button>
    </div>
  );
};

export default HuddleCard;
