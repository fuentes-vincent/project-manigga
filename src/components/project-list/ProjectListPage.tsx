'use client'

import React from 'react'
import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  LayoutGrid,
  List,
  Filter,
  Users,
  CalendarDays,
} from 'lucide-react'
import { cn } from "@/lib/utils"

// Types (move to types file later)
interface TeamMember {
  id: string
  name: string
  initials: string
  avatarUrl?: string
}

type ProjectStatus = 'In Progress' | 'Planning' | 'In Review' | 'Final Review'

interface ProjectCardData {
  id: string
  title: string
  description: string
  progress: number
  status: ProjectStatus
  team: TeamMember[]
  color: string // e.g., 'bg-blue-500', 'bg-green-500'
}

// Mock Data
const mockTeam: TeamMember[] = [
  { id: '1', name: 'Victor D', initials: 'VD', avatarUrl: '/images/avatars/boy.jpg' },
  { id: '2', name: 'Jane S', initials: 'JS', avatarUrl: '/images/avatars/girl-cry.jpg' },
  { id: '3', name: 'Scarlett J', initials: 'SJ', avatarUrl: '/images/avatars/girl-moan.jpg' },
  { id: '4', name: 'Robert K', initials: 'RK' }, // No avatar
]

const mockProjects: ProjectCardData[] = [
  {
    id: 'p1',
    title: 'Website Redesign',
    description: 'Redesign and development of company website with modern UI/UX',
    progress: 75,
    status: 'In Progress',
    team: [mockTeam[0], mockTeam[1], mockTeam[2]],
    color: 'bg-blue-500',
  },
  {
    id: 'p2',
    title: 'Mobile App Development',
    description: 'Native mobile application for iOS and Android platforms',
    progress: 45,
    status: 'Planning',
    team: [mockTeam[0], mockTeam[3]],
    color: 'bg-green-500',
  },
  {
    id: 'p3',
    title: 'Marketing Campaign',
    description: 'Q1 2024 digital marketing campaign across multiple channels',
    progress: 20,
    status: 'In Review',
    team: [mockTeam[1], mockTeam[2], mockTeam[3]],
    color: 'bg-orange-500',
  },
   {
    id: 'p4',
    title: 'Product Launch',
    description: 'New product launch preparation and coordination',
    progress: 60,
    status: 'In Progress',
    team: [mockTeam[0], mockTeam[1]],
    color: 'bg-red-500',
  },
  {
    id: 'p5',
    title: 'Data Analytics Platform',
    description: 'Internal analytics dashboard development',
    progress: 90,
    status: 'Final Review',
    team: [mockTeam[1], mockTeam[2], mockTeam[3]],
    color: 'bg-blue-600',
  },
  {
    id: 'p6',
    title: 'Customer Support System',
    description: 'Implementation of new customer support platform',
    progress: 30,
    status: 'Planning',
    team: [mockTeam[0], mockTeam[3]],
    color: 'bg-teal-500',
  },
]

// Helper function for status badge color
function getStatusColorClasses(status: ProjectStatus): string {
  // Using text-[color]-600 and bg-[color]-50 dark:bg-opacity-10 for consistency
  switch (status) {
    case 'In Progress': return 'text-blue-600 bg-blue-50 dark:bg-opacity-10'
    case 'Planning': return 'text-purple-600 bg-purple-50 dark:bg-opacity-10'
    case 'In Review':
    case 'Final Review': return 'text-yellow-600 bg-yellow-50 dark:bg-opacity-10'
    default: return 'text-gray-600 bg-gray-50 dark:bg-opacity-10'
  }
}

// Project Card Component
const ProjectCard: React.FC<{ project: ProjectCardData }> = ({ project }) => {
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800 rounded-lg border-none">
      {/* Taller colored header */}
      <div className={`h-20 ${project.color}`}></div> 
      
      <CardContent className="p-4"> {/* Removed flex, flex-col, flex-grow */}
        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p> {/* Removed flex-grow */} 
        
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>Progress</span>
          <span className="font-medium text-gray-700 dark:text-gray-300">{project.progress}%</span>
        </div>
        <Progress value={project.progress} className="h-1.5 mb-4 bg-gray-200 dark:bg-gray-700" />
        
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2 overflow-hidden">
            {project.team.slice(0, 3).map(member => (
              <Avatar key={member.id} className="h-6 w-6 border-2 border-white"> {/* Ensure white border */}
                <AvatarImage src={member.avatarUrl} alt={member.name} />
                <AvatarFallback className="text-xs bg-gray-200 dark:bg-gray-600">{member.initials}</AvatarFallback>
              </Avatar>
            ))}
            {project.team.length > 3 && (
                <Avatar className="h-6 w-6 border-2 border-white"> {/* Ensure white border */} 
                  <AvatarFallback className="text-xs bg-gray-300 dark:bg-gray-500">+{project.team.length - 3}</AvatarFallback>
                </Avatar>
              )}
          </div>
          {/* Use Badge component with custom classes for status */}
           <span className={cn(
              "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
              getStatusColorClasses(project.status)
            )}>
               <span className="h-1.5 w-1.5 rounded-full bg-current mr-1.5"></span>
               {project.status}
           </span>
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectListPage() {
  const [viewMode, setViewMode] = React.useState('grid') // 'grid' or 'list'

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between shrink-0">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <div className="flex items-center space-x-2">
            <Button variant={viewMode === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('grid')} aria-label="Grid view">
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('list')} aria-label="List view">
              <List className="h-4 w-4" />
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Project
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
           {/* Filters */}
          <div className="flex flex-wrap gap-2">
             <Button variant="outline" size="sm" className="bg-white dark:bg-gray-800">
              <Filter className="mr-1.5 h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
              Status
              <svg className="ml-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </Button>
            <Button variant="outline" size="sm" className="bg-white dark:bg-gray-800">
              <Users className="mr-1.5 h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
              Team
              <svg className="ml-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </Button>
            <Button variant="outline" size="sm" className="bg-white dark:bg-gray-800">
              <CalendarDays className="mr-1.5 h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
              Date
              <svg className="ml-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </Button>
          </div>

          {/* Project Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground mt-10">
              List view not implemented yet.
            </div>
          )}
        </main>
      </div>
    </div>
  )
} 