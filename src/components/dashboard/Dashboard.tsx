import React, { useState, useEffect } from 'react';
// import { useStore } from '../../stores/Store';
import { Sidebar } from '../sidebar';
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  CheckCircle2,
} from 'lucide-react';
import './dashboard.css';
// import MetricCard from './MetricCard';
import MetricCard from './MetricCard';
import RevenueChart from './RevenueChart';
import ProjectStatusChart from './ProjectStatusChart';
import RecentActivities from './RecentActivities';
import { dashboardData, WorkspaceDashboardData } from '../../mockData/dashboardData';
import { workspacesData, Workspace } from '../../mockData/workspaceData';

interface DashboardProps {
  workspaceId?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ workspaceId }) => {
  // const { projects, tasks } = useStore()
  const [activeTimeframe, setActiveTimeframe] = useState<'1W' | '1M' | '3M' | '1Y'>('1M');
  const [workspaceData, setWorkspaceData] = useState<WorkspaceDashboardData | null>(null);
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  
  useEffect(() => {
    // If workspaceId is provided, find the corresponding dashboard data
    if (workspaceId) {
      const data = dashboardData.find(data => data.workspaceId === workspaceId);
      const workspaceInfo = workspacesData.find(ws => ws.id === workspaceId);
      setWorkspaceData(data || dashboardData[0]);
      setWorkspace(workspaceInfo || workspacesData[0]);
    } else {
      // Default to first workspace if no ID provided
      setWorkspaceData(dashboardData[0]);
      setWorkspace(workspacesData[0]);
    }
  }, [workspaceId]);
  
  // Use fallback values if workspaceData isn't loaded yet
  const metrics = workspaceData?.metrics || {
    totalRevenue: 0,
    activeProjects: 0,
    taskCompletion: 0,
    teamMembers: 0
  };
  
  const handleTimeframeChange = (timeframe: '1W' | '1M' | '3M' | '1Y') => {
    setActiveTimeframe(timeframe);
  };
  
  if (!workspaceData || !workspace) {
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 items-center justify-center">
        <p className="text-gray-600 dark:text-gray-300">Loading dashboard...</p>
      </div>
    );
  }
  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="mb-6">
          <div className={`inline-flex items-center justify-center ${workspace.color} dark:opacity-80 w-10 h-10 rounded-md text-lg font-semibold mr-3`}>
            {workspace.letter}
          </div>
          <span className="text-xl font-semibold text-gray-900 dark:text-white">{workspace.name}</span>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dashboard</h1>
        
        {/* Metrics overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard 
            title="Total Revenue" 
            value={`$${metrics.totalRevenue.toLocaleString()}`} 
            change={24}
            icon={<BarChart3 className="text-blue-500" size={20} />}
          />
          
          <MetricCard 
            title="Active Projects" 
            value={metrics.activeProjects.toString()} 
            change={12}
            icon={<Briefcase className="text-purple-500" size={20} />}
          />
          
          <MetricCard 
            title="Task Completion" 
            value={`${metrics.taskCompletion}%`} 
            change={8}
            icon={<CheckCircle2 className="text-green-500" size={20} />}
          />
          
          <MetricCard 
            title="Team Members" 
            value={metrics.teamMembers.toString()} 
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
            <RevenueChart data={workspaceData.revenueData} />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Project Status</h2>
            <ProjectStatusChart data={workspaceData.projectStatus} />
          </div>
        </div>
        
        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activities</h2>
          </div>
          <RecentActivities activities={workspaceData.recentActivities} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;