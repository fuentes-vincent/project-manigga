import React from 'react';
import { cn } from '@/lib/utils';

interface TeamFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const TeamFilters: React.FC<TeamFiltersProps> = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All Teams' },
    { id: 'my', label: 'My Teams' },
    { id: 'archived', label: 'Archived' },
  ];

  return (
    <div className="flex space-x-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-colors",
            activeFilter === filter.id
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default TeamFilters;
