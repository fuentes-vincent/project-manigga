'use client'

import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from 'lucide-react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import type { Task, TaskStatus, TaskPriority } from '../TaskPage' // Assuming types are exported from TaskPage
import { cn } from "@/lib/utils"

interface TaskListProps {
  tasks: Task[]
}

function getStatusBadgeClasses(status: TaskStatus): string {
  switch (status) {
    case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
    case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
    case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' // Default style
  }
}

function getPriorityColor(priority: TaskPriority): string {
  switch (priority) {
    case 'High': return 'text-red-500'
    case 'Medium': return 'text-orange-500'
    case 'Low': return 'text-green-500'
    default: return 'text-gray-500'
  }
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/50">
            <TableHead className="w-[50px]"><Checkbox /></TableHead><TableHead>Task Name</TableHead><TableHead>Status</TableHead><TableHead>Due Date</TableHead><TableHead>Priority</TableHead><TableHead>Assignee</TableHead><TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell><Checkbox /></TableCell><TableCell className="font-medium text-gray-900 dark:text-white">{task.name}</TableCell><TableCell><Badge variant="secondary" className={cn("border-none", getStatusBadgeClasses(task.status))}>{task.status}</Badge></TableCell><TableCell className="text-gray-500 dark:text-gray-400">{task.dueDate}</TableCell><TableCell><span className={`flex items-center space-x-1 ${getPriorityColor(task.priority)}`}><span className="h-2 w-2 rounded-full bg-current"></span><span>{task.priority}</span></span></TableCell><TableCell>{task.assignee ? (<Avatar className="h-6 w-6"><AvatarFallback className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs font-semibold">{task.assignee.initials}</AvatarFallback></Avatar>) : (<span className="text-gray-400 dark:text-gray-500">-</span>)}</TableCell><TableCell><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal size={16} /><span className="sr-only">Task actions</span></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem>Edit</DropdownMenuItem><DropdownMenuItem>View Details</DropdownMenuItem><DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem></DropdownMenuContent></DropdownMenu></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 