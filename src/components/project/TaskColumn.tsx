import React from 'react';
import { Task } from '../../utils/types/project';
import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  count: number;
  status: Task['status'];
  onStatusChange?: (taskId: string, status: Task['status']) => void;
}

export const TaskColumn: React.FC<TaskColumnProps> = ({ 
  title, 
  tasks, 
  count,
  status,
  onStatusChange
}) => {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
    data: {
      status,
      accepts: ['task']
    }
  });

  const taskIds = tasks.map(task => task.id);
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-white">{title}</h2>
        <span className="flex items-center justify-center w-6 h-6 text-xs font-medium rounded-full bg-gray-700 text-white">
          {count}
        </span>
      </div>
      
      <div 
        ref={setNodeRef}
        className={`flex-1 space-y-3 overflow-y-auto task-column-scroll max-h-[calc(100vh-200px)] pr-1 ${
          isOver ? 'bg-gray-700/30 rounded-lg p-2' : ''
        }`}
      >
        <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onStatusChange={onStatusChange}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default TaskColumn; 