import React from 'react';
// import { Project } from '../../utils/types/project';
import { Plus, Calendar, Sparkles } from 'lucide-react';

interface ProjectHeaderProps {
  // project: Project;
  onNewTask?: () => void;
  onScheduleHuddle?: () => void;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ 
  // project, 
  onNewTask, 
  onScheduleHuddle 
}) => {
  return (
    <div className="p-4 bg-gray-800 text-white">
      {/* Replace with actual project name or relevant header info */}
      {/* <h2>{project.name}</h2> */}
      <h2>Project Title Placeholder</h2>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Project Dashboard
          </h1>
          
          <div className="flex space-x-2">
            <button
              onClick={onScheduleHuddle}
              className="flex items-center text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1.5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Calendar size={16} className="mr-1.5" />
              Schedule Huddle
            </button>
            
            <button
              onClick={onNewTask}
              className="flex items-center text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1.5"
            >
              <Plus size={16} className="mr-1.5" />
              New Task
            </button>
            
            <button
              className="flex items-center text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-md px-3 py-1.5"
            >
              <Sparkles size={16} className="mr-1.5" />
              AI Assistant
            </button>
          </div>
        </div>
        
        <div className="flex items-center">
          <nav className="flex space-x-4">
            <button className="text-sm font-medium px-1 text-blue-600 border-b-2 border-blue-600 pb-1">
              Board
            </button>
            <button className="text-sm font-medium px-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 pb-1">
              List
            </button>
            <button className="text-sm font-medium px-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 pb-1">
              Calendar
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader; 