import React from 'react';
import { Task, User } from '../../utils/types/project';
import { MessageSquare, Paperclip, Calendar } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface TaskCardProps {
  task: Task;
  onStatusChange?: (taskId: string, status: Task['status']) => void;
}

const AvatarGroup: React.FC<{ users: User[], max?: number }> = ({ users, max = 3 }) => {
  const displayUsers = users.slice(0, max);
  const remainingCount = users.length - max;
  
  return (
    <div className="flex -space-x-2">
      {displayUsers.map((user) => (
        <div 
          key={user.id} 
          className="w-6 h-6 rounded-full border-2 border-gray-800 overflow-hidden"
        >
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-medium border-2 border-gray-800 text-white">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: task.id,
    data: {
      task
    }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 1
  };
  
  // Format date to show "Due in Apr 3" format
  const formatDueDate = (date: Date) => {
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    return `Due in ${month} ${day}`;
  };
  
  return (
    <div 
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors cursor-grab active:cursor-grabbing task-card"
    >
      <h3 className="font-medium text-white mb-2">{task.title}</h3>
      
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
        {task.description}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <AvatarGroup users={task.assignees} />
        
        <div className="flex items-center space-x-3 text-gray-400">
          <div className="flex items-center">
            <MessageSquare size={14} className="mr-1" />
            <span className="text-xs">{task.commentsCount}</span>
          </div>
          
          <div className="flex items-center">
            <Paperclip size={14} className="mr-1" />
            <span className="text-xs">{task.attachmentsCount}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-xs text-gray-400">
          <Calendar size={14} className="mr-1" />
          <span>{formatDueDate(task.dueDate)}</span>
        </div>
        
        {onStatusChange && (
          <select 
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])}
            className="text-xs rounded-md bg-gray-700 border-none text-gray-300"
            onClick={(e) => e.stopPropagation()} // Prevent drag when clicking select
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="review">Review</option>
            <option value="done">Done</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default TaskCard; 