'use client'

import React from 'react'
import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Plus,
  LayoutGrid,
  List,
  Filter,
  Users,
  CalendarDays,
} from 'lucide-react'
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
import { 
  mockProjects, 
  ProjectStatus, 
  ProjectCardData 
} from '@/mockData/projectData'

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
  const router = useRouter();

  const handleProjectClick = () => {
    router.push(`/project?id=${project.id}`);
  };

  return (
    <Card 
      className="overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800 rounded-lg border-none cursor-pointer" 
      onClick={handleProjectClick}
    >
      <CardContent className="p-4">
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