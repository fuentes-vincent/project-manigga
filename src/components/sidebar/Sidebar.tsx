import React from 'react';
import { 
  LayoutDashboard, 
  FolderOpenDot, 
  CheckSquare, 
  Users, 
  Settings,
  Video,
  ChevronDown
} from 'lucide-react';
import { useStore } from '../../stores/Store';
import Link from 'next/link';
import { Dashboard } from '../dashboard';
import { usePathname } from 'next/navigation';
import './sidebar.css';

const Sidebar: React.FC = () => {
  const { currentProject } = useStore();
  const pathname = usePathname();
  
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col h-screen border-r border-gray-700">
      {/* TeamSync logo */}
      <div className="p-4 flex items-center">
        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-lg mr-2">
          T
        </div>
        <span className="font-semibold text-lg">TeamSync</span>
      </div>
      
      {/* Navigation links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <Link 
              href="/dashboard" 
              className={`sidebar-nav-item ${pathname === '/dashboard' ? 'sidebar-nav-item-active text-white' : 'text-gray-300 hover:text-white'}`}
            >
              <LayoutDashboard size={18} className="mr-3" />
              Dashboard
            </Link>
          </li>
          
          <li>
            <Link 
              href="/project" 
              className={`sidebar-nav-item ${pathname === '/project' || pathname === '/project-dashboard' ? 'sidebar-nav-item-active text-white' : 'text-gray-300 hover:text-white'}`}
            >
              <FolderOpenDot size={18} className="mr-3" />
              Projects
            </Link>
          </li>
          
          <li>
            <Link 
              href="/tasks" 
              className={`sidebar-nav-item ${pathname === '/tasks' ? 'sidebar-nav-item-active text-white' : 'text-gray-300 hover:text-white'}`}
            >
              <CheckSquare size={18} className="mr-3" />
              Tasks
            </Link>
          </li>
          
          <li>
            <Link 
              href="/huddles" 
              className={`sidebar-nav-item ${pathname === '/huddles' ? 'sidebar-nav-item-active text-white' : 'text-gray-300 hover:text-white'}`}
            >
              <Video size={18} className="mr-3" />
              Huddles
            </Link>
          </li>
          
          <li>
            <Link 
              href="/team" 
              className={`sidebar-nav-item ${pathname === '/team' ? 'sidebar-nav-item-active text-white' : 'text-gray-300 hover:text-white'}`}
            >
              <Users size={18} className="mr-3" />
              Team
            </Link>
          </li>
          
          <li>
            <Link 
              href="/settings" 
              className={`sidebar-nav-item ${pathname === '/settings' ? 'sidebar-nav-item-active text-white' : 'text-gray-300 hover:text-white'}`}
            >
              <Settings size={18} className="mr-3" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Current Project */}
      {currentProject && (
        <div className="p-4 border-t border-gray-700">
          <div className="mb-3">
            <button className="flex items-center justify-between w-full text-sm font-medium text-gray-300 hover:text-white">
              <span>Current Project</span>
              <ChevronDown size={16} />
            </button>
          </div>
          
          <div className="bg-gray-750 rounded-md p-3">
            <h3 className="font-medium text-white mb-2">{currentProject.name}</h3>
            
            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>{currentProject.progress}%</span>
              </div>
              <div className="project-progress-bar">
                <div 
                  className="project-progress-bar-fill" 
                  style={{ width: `${currentProject.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between text-xs text-gray-400">
              <span>Tasks</span>
              <span>{currentProject.tasksCompleted}/{currentProject.totalTasks}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar; 