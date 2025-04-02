'use client'

import React from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, LayoutGrid, ListChecks, FolderKanban, Calendar, BarChartHorizontal } from 'lucide-react'

export function TaskHeader() {
  // Mock user data - replace with actual user context/data
  const user = { initials: 'JD', name: 'John Doe' }
  const notificationCount = 3

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
      {/* Left: Navigation Links */}
      <nav className="flex items-center space-x-4">
        {/* Replace with actual routing logic and active state handling */}
        <Link href="/dashboard" className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <LayoutGrid size={18} />
          <span>Dashboard</span>
        </Link>
        <Link href="/tasks" className="flex items-center space-x-2 text-sm font-medium text-blue-600 dark:text-blue-400">
          <ListChecks size={18} />
          <span>Tasks</span>
        </Link>
        <Link href="/projects" className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <FolderKanban size={18} />
          <span>Projects</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <Calendar size={18} />
          <span>Calendar</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <BarChartHorizontal size={18} />
          <span>Reports</span>
        </Link>
      </nav>

      {/* Right: Search, Notifications, Profile */}
      <div className="flex items-center space-x-4">
        <div className="relative w-64">
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 bg-gray-100 dark:bg-gray-700 border-none"
          />
          <svg className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800" />
          )}
          <span className="sr-only">Notifications</span>
        </Button>
        <Avatar className="h-8 w-8">
          {/* <AvatarImage src={user.avatarUrl} alt={user.name} /> */}
          <AvatarFallback className="bg-blue-500 text-white text-xs font-semibold">{user.initials}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
} 