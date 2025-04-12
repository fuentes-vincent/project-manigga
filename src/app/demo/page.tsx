'use client';

import React, { useState } from 'react';
import { workspacesData } from '@/mockData/workspaceData';
import Image from 'next/image';

export default function DemoPage() {
  const [selectedWorkspace, setSelectedWorkspace] = useState('teamsync');
  
  // Find the selected workspace data
  const workspace = workspacesData.find(ws => ws.id === selectedWorkspace) || workspacesData[0];
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Dashboard Demo</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Select a workspace to see how the dashboard data changes dynamically:
        </p>
        
        {/* Workspace selector */}
        <div className="flex flex-wrap gap-4 mb-8">
          {workspacesData.map(ws => (
            <button
              key={ws.id}
              onClick={() => setSelectedWorkspace(ws.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                selectedWorkspace === ws.id ? 
                'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-2 border-blue-500' : 
                'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className={`${ws.color} dark:opacity-80 w-6 h-6 rounded flex items-center justify-center text-sm font-semibold`}>
                {ws.letter}
              </div>
              <span>{ws.name}</span>
            </button>
          ))}
        </div>
        
        {/* Display selected workspace info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className={`${workspace.color} dark:opacity-80 w-10 h-10 rounded-md flex items-center justify-center text-lg font-semibold`}>
              {workspace.letter}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{workspace.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{workspace.description}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">Team members:</span>
            <div className="flex -space-x-2">
              {workspace.members.map(member => (
                <Image 
                  key={member.id}
                  src={member.avatar}
                  alt={member.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Show the dashboard with the selected workspace data */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Dashboard Preview</h2>
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <iframe
              src={`/dashboard/${selectedWorkspace}`}
              className="w-full h-[800px] border-0 rounded-lg"
              title="Dashboard Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
