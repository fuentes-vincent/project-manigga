import React from 'react';
import { ChevronDown } from 'lucide-react';

interface TeamSortProps {
  sortOption: string;
  onSortChange: (option: string) => void;
}

const TeamSort: React.FC<TeamSortProps> = ({ sortOption, onSortChange }) => {
  return (
    <div className="flex items-center">
      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm px-3 py-2 h-9 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8 text-gray-900 dark:text-white"
      >
        <option value="name">Sort by: Name</option>
        <option value="category">Sort by: Category</option>
        <option value="projects">Sort by: Projects</option>
        <option value="lastActive">Sort by: Last Active</option>
      </select>
      <div className="pointer-events-none absolute right-3 flex items-center">
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
};

export default TeamSort;
