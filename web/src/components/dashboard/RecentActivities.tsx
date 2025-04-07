import React from 'react';

interface ActivityItem {
  id: string;
  project: string;
  status: 'In Progress' | 'Completed' | 'Pending';
  teamMembers: string[];
  progress: number;
  dueDate: string;
}

const RecentActivities: React.FC = () => {
  // Sample data for activities
  const activities: ActivityItem[] = [
    {
      id: '1',
      project: 'Website Redesign',
      status: 'In Progress',
      teamMembers: ['team1.jpg', 'team2.jpg', 'team3.jpg'],
      progress: 70,
      dueDate: 'Dec 20, 2023'
    },
    {
      id: '2',
      project: 'Mobile App Development',
      status: 'Completed',
      teamMembers: ['team2.jpg', 'team4.jpg', 'team5.jpg'],
      progress: 100,
      dueDate: 'Dec 15, 2023'
    },
    {
      id: '3',
      project: 'Marketing Campaign',
      status: 'Pending',
      teamMembers: ['team1.jpg', 'team3.jpg', 'team5.jpg'],
      progress: 20,
      dueDate: 'Dec 25, 2023'
    }
  ];
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-orange-100 text-orange-800';
      case 'Pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return '';
    }
  };
  
  const getProgressColorClass = (progress: number) => {
    if (progress === 100) return 'bg-green-500';
    if (progress > 60) return 'bg-blue-500';
    if (progress > 30) return 'bg-orange-500';
    return 'bg-gray-500';
  };
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Project
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Team
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Progress
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Due Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {activities.map(activity => (
            <tr key={activity.id} className="hover:bg-gray-500 dark:hover:bg-gray-750">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900 dark:text-white">{activity.project}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(activity.status)}`}>
                  {activity.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex -space-x-2">
                  {activity.teamMembers.map((member, index) => (
                    <div 
                      key={index}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xs font-medium text-gray-800 dark:text-gray-200"
                      style={{ zIndex: activity.teamMembers.length - index }}
                    >
                      {member.charAt(0).toUpperCase()}
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="w-full max-w-[150px]">
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {activity.progress}%
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getProgressColorClass(activity.progress)}`} 
                      style={{ width: `${activity.progress}%` }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {activity.dueDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivities; 