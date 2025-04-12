import React from 'react';
import { Button } from '@/components/components/ui/button';
import { Calendar, Video, FileText, Send } from 'lucide-react';
import { QuickAction } from '@/mockData/huddleData';

interface QuickActionsProps {
  actions: QuickAction[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
  // Function to get the appropriate icon based on the icon name in the mock data
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="mr-2 h-4 w-4" />;
      case 'Video':
        return <Video className="mr-2 h-4 w-4" />;
      case 'FileText':
        return <FileText className="mr-2 h-4 w-4" />;
      case 'Send':
        return <Send className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Actions</h3>
      <div className="space-y-2">
        {actions.map((action) => (
          <Button 
            key={action.id}
            variant="ghost" 
            className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            {getIcon(action.icon)}
            {action.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
