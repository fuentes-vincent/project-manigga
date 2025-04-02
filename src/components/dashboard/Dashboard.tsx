import React, { useState } from 'react';
import { useStore } from '../../stores/Store';
import { Sidebar } from '../sidebar';
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import './dashboard.css';
// import MetricCard from './MetricCard';
import MetricCard from './MetricCard';
import RevenueChart from './RevenueChart';
import ProjectStatusChart from './ProjectStatusChart';
import RecentActivities from './RecentActivities';

export const Dashboard: React.FC = () => {
  const { projects, tasks } = useStore();
  const [activeTimeframe, setActiveTimeframe] = useState<'1W' | '1M' | '3M' | '1Y'>('1M');
  
  // Mock data for metrics
  const totalRevenue = 84254;
  const activeProjects = 45;
  const taskCompletionPercentage = 92;
  const teamMembersCount = 16;
  
  const handleTimeframeChange = (timeframe: '1W' | '1M' | '3M' | '1Y') => {
    setActiveTimeframe(timeframe);
  };
  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 overflow-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Good morning, Alex</h1>
        
        {/* Metrics overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard 
            title="Total Revenue" 
            value={`$${totalRevenue.toLocaleString()}`} 
            change={24}
            icon={<BarChart3 className="text-blue-500" size={20} />}
          />
          
          <MetricCard 
            title="Active Projects" 
            value={activeProjects.toString()} 
            change={12}
            icon={<Briefcase className="text-purple-500" size={20} />}
          />
          
          <MetricCard 
            title="Task Completion" 
            value={`${taskCompletionPercentage}%`} 
            change={8}
            icon={<CheckCircle2 className="text-green-500" size={20} />}
          />
          
          <MetricCard 
            title="Team Members" 
            value={teamMembersCount.toString()} 
            change={2}
            icon={<Users className="text-orange-500" size={20} />}
          />
        </div>
        
        {/* Charts and data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h2>
              <div className="flex space-x-2">
                <button 
                  className={`px-2 py-1 text-xs rounded ${activeTimeframe === '1W' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
                  onClick={() => handleTimeframeChange('1W')}
                >
                  1W
                </button>
                <button 
                  className={`px-2 py-1 text-xs rounded ${activeTimeframe === '1M' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
                  onClick={() => handleTimeframeChange('1M')}
                >
                  1M
                </button>
                <button 
                  className={`px-2 py-1 text-xs rounded ${activeTimeframe === '3M' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
                  onClick={() => handleTimeframeChange('3M')}
                >
                  3M
                </button>
                <button 
                  className={`px-2 py-1 text-xs rounded ${activeTimeframe === '1Y' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
                  onClick={() => handleTimeframeChange('1Y')}
                >
                  1Y
                </button>
              </div>
            </div>
            <RevenueChart />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Project Status</h2>
            <ProjectStatusChart />
          </div>
        </div>
        
        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activities</h2>
          </div>
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 