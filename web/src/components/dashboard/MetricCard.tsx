import React, { ReactNode } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all hover:shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</span>
        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
          {icon}
        </div>
      </div>
      
      <div className="text-2xl font-bold dark:text-white mb-1">{value}</div>
      
      <div className={`flex items-center text-xs font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
        <span>{isPositive ? '+' : ''}{change}% </span>
        <span className="text-gray-500 dark:text-gray-400 ml-1">from last month</span>
      </div>
    </div>
  );
};

export default MetricCard; 