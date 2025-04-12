import React from 'react';
import { Button } from '@/components/components/ui/button';
import { Input } from '@/components/components/ui/input';
import { Search, Calendar, Clock, Users, FileText } from 'lucide-react';
import StatCard from './StatCard';
import UpcomingHuddles from './UpcomingHuddles';
import RecentHuddles from './RecentHuddles';
import QuickActions from './QuickActions';
import TeamAvailability from './TeamAvailability';
import RecentActivities from './RecentActivities';
import { Sidebar } from '@/components/sidebar';
import { huddleData } from '@/mockData/huddleData';

const HuddlePage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Huddles</h1>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search huddles..." 
                className="pl-8 w-64 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2">
              <span className="text-lg font-bold">+</span>
              <span>New Huddle</span>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Total Huddles" 
            value={huddleData.stats.totalHuddles.toString()} 
            icon={<FileText className="h-5 w-5 text-blue-500" />} 
          />
          <StatCard 
            title="Active Now" 
            value={huddleData.stats.activeNow.toString()} 
            icon={<Clock className="h-5 w-5 text-red-500" />} 
          />
          <StatCard 
            title="Team Members" 
            value={huddleData.stats.teamMembers.toString()} 
            icon={<Users className="h-5 w-5 text-yellow-500" />} 
          />
          <StatCard 
            title="Scheduled Today" 
            value={huddleData.stats.scheduledToday.toString()} 
            icon={<Calendar className="h-5 w-5 text-orange-500" />} 
          />
        </div>

        {/* Main content and sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            {/* Upcoming Huddles Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
              <UpcomingHuddles huddles={huddleData.upcomingHuddles} />
            </div>

            {/* Recent Huddles Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <RecentHuddles huddles={huddleData.recentHuddles} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <QuickActions actions={huddleData.quickActions} />
            </div>

            {/* Team Availability */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <TeamAvailability members={huddleData.teamAvailability} />
            </div>

            {/* Recent Activities */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <RecentActivities activities={huddleData.recentActivities} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuddlePage;
