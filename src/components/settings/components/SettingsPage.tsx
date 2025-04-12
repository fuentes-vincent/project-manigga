'use client'

import React, { useState } from 'react';
import SettingsNav from './SettingsNav';
import ProfileSection from './ProfileSection';
import PersonalInfoForm from './PersonalInfoForm';
import PasswordSection from './PasswordSection';
import SecuritySection from './SecuritySection';
import DangerZoneSection from './DangerZoneSection';
import { settingsNavItems } from '@/mockData/settingsData';
import Sidebar from '@/components/sidebar/Sidebar';

const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('account');

  // Mock user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    avatarUrl: '/images/girl-cry.jpg',
    phone: '+1 (555) 123-4567'
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div className="space-y-8">
            <ProfileSection 
              name={user.name}
              avatarUrl={user.avatarUrl}
            />
            <PersonalInfoForm 
              initialName={user.name}
              initialEmail={user.email}
              initialPhone={user.phone}
            />
            <PasswordSection />
            <SecuritySection />
            <DangerZoneSection />
          </div>
        );
      case 'appearance':
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Appearance</h2>
            <p className="text-gray-500 dark:text-gray-400">Customize how Barkada looks on your device</p>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Theme</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Light Theme Option */}
                <div className="relative">
                  <input type="radio" id="light-theme" name="theme" className="peer sr-only" defaultChecked />
                  <label 
                    htmlFor="light-theme" 
                    className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-200 dark:hover:border-blue-900 peer-checked:border-blue-500 dark:peer-checked:border-blue-500 transition-all"
                  >
                    <div className="bg-white h-28 w-full border border-gray-200 rounded-md mb-4 shadow-sm"></div>
                    <span className="font-medium text-gray-900 dark:text-white">Light</span>
                  </label>
                  <div className="absolute hidden peer-checked:flex top-3 right-3 h-5 w-5 bg-blue-500 rounded-full items-center justify-center">
                    <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                
                {/* Dark Theme Option */}
                <div className="relative">
                  <input type="radio" id="dark-theme" name="theme" className="peer sr-only" />
                  <label 
                    htmlFor="dark-theme" 
                    className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-200 dark:hover:border-blue-900 peer-checked:border-blue-500 dark:peer-checked:border-blue-500 transition-all"
                  >
                    <div className="bg-gray-900 h-28 w-full border border-gray-700 rounded-md mb-4 shadow-sm"></div>
                    <span className="font-medium text-gray-900 dark:text-white">Dark</span>
                  </label>
                  <div className="absolute hidden peer-checked:flex top-3 right-3 h-5 w-5 bg-blue-500 rounded-full items-center justify-center">
                    <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                
                {/* System Theme Option */}
                <div className="relative">
                  <input type="radio" id="system-theme" name="theme" className="peer sr-only" />
                  <label 
                    htmlFor="system-theme" 
                    className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-200 dark:hover:border-blue-900 peer-checked:border-blue-500 dark:peer-checked:border-blue-500 transition-all"
                  >
                    <div className="bg-gradient-to-b from-white to-gray-900 h-28 w-full border border-gray-300 dark:border-gray-700 rounded-md mb-4 shadow-sm"></div>
                    <span className="font-medium text-gray-900 dark:text-white">System</span>
                  </label>
                  <div className="absolute hidden peer-checked:flex top-3 right-3 h-5 w-5 bg-blue-500 rounded-full items-center justify-center">
                    <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h2>
            <p className="text-gray-500 dark:text-gray-400">Manage how you receive notifications</p>
            {/* Notification settings would go here */}
            <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Email notifications</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive email notifications for important events</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Push notifications</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive push notifications in your browser</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        );
      case 'billing':
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Billing</h2>
            <p className="text-gray-500 dark:text-gray-400">Manage your subscription and payment methods</p>
            {/* Billing options would go here */}
            <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">Current Plan</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-md p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-blue-800 dark:text-blue-400">Pro Plan</p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">$15/month • Renews on May 15, 2023</p>
                  </div>
                  <button className="px-3 py-1 text-sm bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700">
                    Change Plan
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900 dark:text-white">Payment Methods</h3>
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <p className="text-gray-700 dark:text-gray-300">•••• •••• •••• 4242</p>
                  </div>
                  <button className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    Edit
                  </button>
                </div>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  + Add payment method
                </button>
              </div>
            </div>
          </div>
        );
      case 'team':
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Team Settings</h2>
            <p className="text-gray-500 dark:text-gray-400">Manage your team members and permissions</p>
            {/* Team settings would go here */}
            <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900 dark:text-white">Team Members</h3>
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Add Member
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="text-gray-900 dark:text-white">You</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded">Admin</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="text-gray-900 dark:text-white">Sarah Miller</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">sarah.miller@example.com</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded">Member</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'integrations':
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Integrations</h2>
            <p className="text-gray-500 dark:text-gray-400">Connect with third-party tools and services</p>
            {/* Integrations would go here */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">G</div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Google Calendar</h3>
                  </div>
                  <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
                    Connect
                  </button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sync your huddles with Google Calendar
                </p>
              </div>
              <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">S</div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Slack</h3>
                  </div>
                  <button className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md hover:bg-green-200 dark:hover:bg-green-900/50">
                    Connected
                  </button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get notifications in your Slack workspace
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Account Settings</h2>
            <p className="text-gray-500 dark:text-gray-400">Manage your account settings and preferences</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 overflow-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SettingsNav 
              items={settingsNavItems}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
          </div>
          
          <div className="lg:col-span-3">
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
