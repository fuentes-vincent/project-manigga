import React from 'react';
import { Plus, Grid, Share, Clock, Star } from 'lucide-react';
import { workspaceNavItems } from '../../../mockData/workspaceData';

interface WorkspaceSidebarProps {
  activeItem: string;
  onNavItemClick: (id: string) => void;
}

const WorkspaceSidebar: React.FC<WorkspaceSidebarProps> = ({ 
  activeItem = 'all',
  onNavItemClick 
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Grid': return <Grid size={18} />;
      case 'Share': return <Share size={18} />;
      case 'Clock': return <Clock size={18} />;
      case 'Star': return <Star size={18} />;
      default: return <Grid size={18} />;
    }
  };

  return (
    <div className="w-full">
      <button className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md mb-6 transition-colors">
        <Plus size={18} className="mr-2" />
        <span>Create Workspace</span>
      </button>
      
      <div className="space-y-1">
        {workspaceNavItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavItemClick(item.id)}
            className={`flex items-center w-full py-2 px-3 rounded-md text-left transition-colors ${
              activeItem === item.id 
                ? 'bg-gray-100 text-blue-600 font-medium' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="mr-3">{getIcon(item.icon)}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkspaceSidebar;
