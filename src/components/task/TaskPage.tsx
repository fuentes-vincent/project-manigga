'use client'

import React from 'react'
import { TaskSidebar } from './components/TaskSidebar'
import { TaskList } from './components/TaskList'
import { Button } from "@/components/ui/button"
import { ListFilter, Plus, LayoutGrid, List, Calendar } from 'lucide-react'

// Mock Data Types (can be moved to a types file)
export type TaskStatus = 'In Progress' | 'Completed' | 'Pending'
export type TaskPriority = 'High' | 'Medium' | 'Low'

export interface Assignee {
  id: string
  name: string
  initials: string
  avatarUrl?: string
}

export interface Task {
  id: string
  name: string
  status: TaskStatus
  dueDate: string
  priority: TaskPriority
  assignee: Assignee | null
}

// Mock Data
const mockAssignees: Record<string, Assignee> = {
  jd: { id: 'jd', name: 'John Doe', initials: 'JD' },
  as: { id: 'as', name: 'Alice Smith', initials: 'AS' },
  rk: { id: 'rk', name: 'Robert King', initials: 'RK' },
}

const mockTasks: Task[] = [
  {
    id: 'task-1',
    name: 'Update website homepage',
    status: 'In Progress',
    dueDate: 'Oct 25',
    priority: 'High',
    assignee: mockAssignees.jd,
  },
  {
    id: 'task-2',
    name: 'Create social media content',
    status: 'Completed',
    dueDate: 'Oct 24',
    priority: 'Medium',
    assignee: mockAssignees.as,
  },
  {
    id: 'task-3',
    name: 'Review project proposal',
    status: 'Pending',
    dueDate: 'Oct 26',
    priority: 'Low',
    assignee: mockAssignees.rk,
  },
]

export function TaskPage() {
  // State for tasks, filters, sorting, etc. will be added later
  const tasks = mockTasks
  const [activeView, setActiveView] = React.useState('list')

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <TaskHeader /> */}
        <main className="flex-1 flex overflow-hidden">
          <TaskSidebar />
          <div className="flex-1 flex flex-col overflow-auto p-6 space-y-6">
            {/* Task controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                 <Button variant={activeView === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setActiveView('list')} aria-label="List view">
                  <List className="h-4 w-4" />
                </Button>
                <Button variant={activeView === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setActiveView('grid')} aria-label="Grid view">
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                 <Button variant={activeView === 'calendar' ? 'secondary' : 'ghost'} size="icon" onClick={() => setActiveView('calendar')} aria-label="Calendar view" className="hidden md:inline-flex"> {/* Hide calendar on smaller screens based on image */} 
                  <Calendar className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="ml-4">
                  <ListFilter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                 <Button variant="outline">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                  Sort
                </Button>
              </div>
              <Button>
                 <Plus className="mr-2 h-4 w-4" />
                 New Task
              </Button>
            </div>
            
            {/* TaskList */}
             {activeView === 'list' && <TaskList tasks={tasks} />} 
             {/* Add Grid view and Calendar view components here later */}
             {activeView !== 'list' && <p className="text-center text-muted-foreground mt-10">{activeView.charAt(0).toUpperCase() + activeView.slice(1)} view not implemented yet.</p>} 
          </div>
        </main>
      </div>
    </div>
  )
} 