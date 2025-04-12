import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500 dark:text-gray-400 text-sm">{title}</span>
        {icon}
      </div>
      <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
    </div>
  );
};

export default StatCard;
