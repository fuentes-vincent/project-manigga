'use client';

import React, { useState } from 'react';
import { Search, LayoutDashboard, Settings } from 'lucide-react';
import WorkspaceSidebar from './components/WorkspaceSidebar';
import WorkspaceCard from './components/WorkspaceCard';
import { workspacesData } from '../../mockData/workspaceData';
import { userProfileData } from '../../mockData/settingsData';
import Image from 'next/image';

const WorkspacePage: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState('all');

  const handleNavItemClick = (id: string) => {
    setActiveNavItem(id);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 overflow-auto">
        <div className="flex h-full">
          {/* Left Workspace Sidebar */}
          <div className="w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center mr-2">
                <span className="font-bold">W</span>
              </div>
              <span className="font-semibold dark:text-white">Workspace</span>
            </div>
            
            <WorkspaceSidebar 
              activeItem={activeNavItem} 
              onNavItemClick={handleNavItemClick} 
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <div className="relative rounded-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search workspaces..." 
                      className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-64 bg-white dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                  <LayoutDashboard size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                  <Settings size={20} />
                </button>
                <Image
                  src={userProfileData.avatar} 
                  alt={userProfileData.fullName} 
                  className="w-8 h-8 rounded-full"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            {/* Workspace Content */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl font-bold dark:text-white">All Workspaces</h1>
                  <p className="text-gray-500 dark:text-gray-400">Manage and collaborate on your workspaces</p>
                </div>
              </div>

              {/* Workspace Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workspacesData.map((workspace) => (
                  <WorkspaceCard key={workspace.id} workspace={workspace} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
