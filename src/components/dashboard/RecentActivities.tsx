import React from 'react';
import Image from 'next/image';
import { Activity } from '../../mockData/dashboardData';

interface RecentActivitiesProps {
  activities?: Activity[];
}

// Default data if none is provided
const defaultActivities: Activity[] = [
  {
    id: "act1",
    user: { name: "Jane Smith", avatar: "/images/boy.jpg" },
    action: "uploaded new files to",
    target: "Q1 Marketing Assets",
    timestamp: "10 minutes ago",
    workspaceId: "teamsync"
  },
  {
    id: "act2",
    user: { name: "Alex Chen", avatar: "/images/girl-cry.jpg" },
    action: "commented on",
    target: "Brand Guidelines",
    timestamp: "1 hour ago",
    workspaceId: "teamsync"
  },
  {
    id: "act3",
    user: { name: "Morgan Lee", avatar: "/images/boy.jpg" },
    action: "completed task",
    target: "Social Media Calendar",
    timestamp: "2 hours ago",
    workspaceId: "teamsync"
  }
];

const RecentActivities: React.FC<RecentActivitiesProps> = ({ activities = defaultActivities }) => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4 p-4">
          <div className="flex-shrink-0">
            <Image 
              src={activity.user.avatar} 
              alt={activity.user.name}
              width={40}
              height={40}
              className="rounded-full h-10 w-10 object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {activity.user.name} <span className="font-normal text-gray-500 dark:text-gray-400">{activity.action}</span> <span className="font-semibold">{activity.target}</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {activity.timestamp}
            </p>
          </div>
        </div>
      ))}
      
      {activities.length === 0 && (
        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
          No recent activities
        </div>
      )}
    </div>
  );
};

export default RecentActivities;