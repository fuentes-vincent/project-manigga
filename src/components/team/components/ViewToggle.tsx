import React from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import { cn } from '@/lib/utils';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  onViewChange: (mode: 'grid' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, onViewChange }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-1 flex">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onViewChange('grid')}
        className={cn(
          "p-1 h-8 w-8",
          viewMode === 'grid' 
            ? "bg-white dark:bg-gray-700 shadow-sm" 
            : "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
        )}
        aria-label="Grid view"
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onViewChange('list')}
        className={cn(
          "p-1 h-8 w-8",
          viewMode === 'list' 
            ? "bg-white dark:bg-gray-700 shadow-sm" 
            : "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
        )}
        aria-label="List view"
      >
        <List className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ViewToggle;
