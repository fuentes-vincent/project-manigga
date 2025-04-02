'use client'

import React from 'react'
import { Badge } from "@/components/ui/badge"
import { ListTodo, Star, Clock, Flag, CalendarDays, CircleAlert, User } from 'lucide-react'

// Mock data - replace with actual data or props
const categoryCounts = {
  all: 24,
  important: 6,
  scheduled: 10,
  flagged: 4,
}

const quickFilterCounts = {
  dueToday: 5,
  overdue: 2,
  assignedToMe: 8,
}

const statistics = {
  total: 24,
  completed: 18,
  dueToday: 5,
}

export function TaskSidebar() {
  // State for active category/filter can be added later
  const activeCategory = 'all'

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 flex flex-col space-y-8 overflow-y-auto">
      {/* Categories Section */}
      <div>
        <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3">Categories</h3>
        <nav className="space-y-1">
          <button className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm font-medium ${activeCategory === 'all' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'}`}>
            <span className="flex items-center space-x-2">
              <ListTodo size={16} />
              <span>All Tasks</span>
            </span>
            <Badge variant="secondary" className={`${activeCategory === 'all' ? 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200' : ''}`}>{categoryCounts.all}</Badge>
          </button>
          {/* Add other category buttons similarly */} 
           <button className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50`}>
            <span className="flex items-center space-x-2">
              <Star size={16} />
              <span>Important</span>
            </span>
            <Badge variant="secondary">{categoryCounts.important}</Badge>
          </button>
          <button className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50`}>
            <span className="flex items-center space-x-2">
              <Clock size={16} />
              <span>Scheduled</span>
            </span>
            <Badge variant="secondary">{categoryCounts.scheduled}</Badge>
          </button>
          <button className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50`}>
            <span className="flex items-center space-x-2">
              <Flag size={16} />
              <span>Flagged</span>
            </span>
            <Badge variant="secondary">{categoryCounts.flagged}</Badge>
          </button>
        </nav>
      </div>

      {/* Quick Filters Section */}
      <div>
        <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3">Quick Filters</h3>
        <nav className="space-y-1">
           <button className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50`}>
            <span className="flex items-center space-x-2">
              <CalendarDays size={16} />
              <span>Due Today</span>
            </span>
            <Badge variant="secondary">{quickFilterCounts.dueToday}</Badge>
          </button>
           <button className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50`}>
            <span className="flex items-center space-x-2">
              <CircleAlert size={16} />
              <span>Overdue</span>
            </span>
            <Badge variant="secondary">{quickFilterCounts.overdue}</Badge>
          </button>
           <button className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50`}>
            <span className="flex items-center space-x-2">
              <User size={16} />
              <span>Assigned to Me</span>
            </span>
            <Badge variant="secondary">{quickFilterCounts.assignedToMe}</Badge>
          </button>
        </nav>
      </div>

      {/* Statistics Section */}
      <div>
        <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3">Statistics</h3>
        <div className="space-y-3">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-gray-600 dark:text-gray-400">Total Tasks</span>
              <span className="font-semibold text-gray-900 dark:text-white">{statistics.total}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-600">
              <div className="bg-blue-500 h-1 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-gray-600 dark:text-gray-400">Completed</span>
              <span className="font-semibold text-gray-900 dark:text-white">{statistics.completed}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-600">
              <div className="bg-green-500 h-1 rounded-full" style={{ width: `${(statistics.completed / statistics.total) * 100}%` }}></div>
            </div>
          </div>
           <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-gray-600 dark:text-gray-400">Due Today</span>
              <span className="font-semibold text-gray-900 dark:text-white">{statistics.dueToday}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-600">
              <div className="bg-orange-500 h-1 rounded-full" style={{ width: `${(statistics.dueToday / statistics.total) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
} 