import React from 'react';
import ActivityItem from './ActivityItem';
import { Activity } from '@/mockData/huddleData';

interface RecentActivitiesProps {
  activities: Activity[];
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ activities }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Recent Activities</h3>
      <div className="space-y-3">
        {activities.map((activity) => (
          <ActivityItem 
            key={activity.id}
            user={activity.user.name}
            avatar={activity.user.avatar}
            action={getActivityAction(activity.type, activity.title)}
            time={activity.timeAgo}
          />
        ))}
      </div>
    </div>
  );
};

// Helper function to format the activity action based on type and title
function getActivityAction(type: string, title: string): string {
  switch (type) {
    case 'huddle_scheduled':
      return `scheduled "${title}"`;
    case 'huddle_joined':
      return `joined "${title}"`;
    case 'recording_shared':
      return `shared recording of "${title}"`;
    case 'huddle_ended':
      return `ended "${title}"`;
    default:
      return `interacted with "${title}"`;
  }
}

export default RecentActivities;
