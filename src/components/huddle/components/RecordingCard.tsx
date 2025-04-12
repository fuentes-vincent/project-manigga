import React from 'react';
import { Calendar, Clock, Users, Play, Download } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import Image from 'next/image';

interface RecordingCardProps {
  title: string;
  date: string;
  duration: string;
  participants: number;
  thumbnail?: string; // Optional thumbnail URL
}

const RecordingCard: React.FC<RecordingCardProps> = ({ 
  title, 
  date, 
  duration, 
  participants,
  thumbnail 
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
      {thumbnail && (
        <div className="mb-3 relative">
          <Image 
            src={thumbnail} 
            alt={title} 
            className="w-full h-32 object-cover rounded-md"
            width={32}
            height={32}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 rounded-full p-2">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      )}
      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
        <Calendar className="h-4 w-4" />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
        <Clock className="h-4 w-4" />
        <span>{duration}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <Users className="h-4 w-4" />
        <span>{participants} participants</span>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="flex-1 flex items-center justify-center gap-1">
          <Play className="h-4 w-4" />
          <span>Play</span>
        </Button>
        <Button variant="outline" className="flex-1 flex items-center justify-center gap-1">
          <Download className="h-4 w-4" />
          <span>Download</span>
        </Button>
      </div>
    </div>
  );
};

export default RecordingCard;
