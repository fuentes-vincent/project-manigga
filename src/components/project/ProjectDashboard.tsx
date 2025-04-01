import React, { useState } from 'react';
import { Task, TaskStatus } from '../../utils/types/project';
import { useStore } from '../../stores/Store';
import TaskColumn from './TaskColumn';
import HuddlesList from './HuddlesList';
import { Sidebar } from '../sidebar';
import { 
  MessageSquare, 
  Calendar, 
  Plus, 
  Sparkles, 
  LayoutGrid, 
  List, 
} from 'lucide-react';
import { 
  DndContext, 
  DragEndEvent, 
  DragOverEvent, 
  DragOverlay, 
  DragStartEvent, 
  PointerSensor, 
  useSensor, 
  useSensors 
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';
import './project-dashboard.css';

export const ProjectDashboard: React.FC = () => {
  const { 
    tasks, 
    currentProject, 
    huddles,
    updateTaskStatus,
    addTask,
    addHuddle
  } = useStore();
  
  const [aiAssistantInput, setAiAssistantInput] = useState('');
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [activeView, setActiveView] = useState<'board' | 'list' | 'calendar'>('board');
  
  // Group tasks by status
  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
  const reviewTasks = tasks.filter(task => task.status === 'review');
  const doneTasks = tasks.filter(task => task.status === 'done');
  
  // Configure sensors for drag and drop
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px movement required before drag starts
      },
    })
  );
  
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const activeTaskId = active.id as string;
    const taskToMove = tasks.find(task => task.id === activeTaskId);
    
    if (taskToMove) {
      setActiveTask(taskToMove);
    }
  };
  
  const handleDragOver = (event: DragOverEvent) => {
    // Optional: can be used to animate tasks shifting when hovering
  };
  
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over) {
      setActiveTask(null);
      return;
    }
    
    const activeTaskId = active.id as string;
    const overId = over.id;
    
    // If dragging over a column (status change)
    if (typeof overId === 'string' && ['todo', 'in-progress', 'review', 'done'].includes(overId)) {
      const newStatus = overId as TaskStatus;
      updateTaskStatus(activeTaskId, newStatus);
    }
    
    setActiveTask(null);
  };
  
  const handleNewTask = () => {
    // In a real app, this would open a modal or form
    console.log('Create new task');
  };
  
  const handleScheduleHuddle = () => {
    // In a real app, this would open a modal or form
    console.log('Schedule new huddle');
  };
  
  const handleJoinHuddle = (huddleId: string) => {
    // In a real app, this would join a video call
    console.log('Join huddle', huddleId);
  };
  
  const handleAiAssistantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the query to an AI service
    console.log('AI Assistant query:', aiAssistantInput);
    setAiAssistantInput('');
  };
  
  if (!currentProject) {
    return <div>No project selected</div>;
  }
  
  return (
    <div className="flex h-screen project-dashboard-container">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 overflow-hidden">
        <div className="flex h-full">
          {/* Project content */}
          <div className="flex-1 p-6 overflow-hidden">
            <h1 className="text-2xl font-bold text-white mb-4">Project Dashboard</h1>
            
            {/* Navigation tabs */}
            <div className="flex mb-6">
              <button 
                className={`py-2 px-4 flex items-center ${activeView === 'board' ? 'nav-item-active' : 'text-gray-400'}`}
                onClick={() => setActiveView('board')}
              >
                <LayoutGrid size={16} className="mr-2" />
                Board
              </button>
              <button 
                className={`py-2 px-4 flex items-center ${activeView === 'list' ? 'nav-item-active' : 'text-gray-400'}`}
                onClick={() => setActiveView('list')}
              >
                <List size={16} className="mr-2" />
                List
              </button>
              <button 
                className={`py-2 px-4 flex items-center ${activeView === 'calendar' ? 'nav-item-active' : 'text-gray-400'}`}
                onClick={() => setActiveView('calendar')}
              >
                <Calendar size={16} className="mr-2" />
                Calendar
              </button>
            </div>
            
            {/* Action buttons */}
            <div className="flex justify-end space-x-2 mb-6">
              <button
                onClick={handleScheduleHuddle}
                className="flex items-center text-sm bg-gray-800 border border-gray-700 rounded-md px-3 py-1.5 text-gray-300"
              >
                <Calendar size={16} className="mr-1.5" />
                Schedule Huddle
              </button>
              
              <button
                onClick={handleNewTask}
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
            
            <DndContext
              sensors={sensors}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
            >
              <div className="grid grid-cols-4 gap-4 h-[calc(100vh-220px)]">
                <div className="h-full">
                  <TaskColumn 
                    title="To Do" 
                    tasks={todoTasks} 
                    count={todoTasks.length}
                    status="todo"
                    onStatusChange={updateTaskStatus}
                  />
                </div>
                
                <div className="h-full">
                  <TaskColumn 
                    title="In Progress" 
                    tasks={inProgressTasks}
                    status="in-progress" 
                    count={inProgressTasks.length}
                    onStatusChange={updateTaskStatus}
                  />
                </div>
                
                <div className="h-full">
                  <TaskColumn 
                    title="Review" 
                    tasks={reviewTasks}
                    status="review" 
                    count={reviewTasks.length}
                    onStatusChange={updateTaskStatus}
                  />
                </div>
                
                <div className="h-full">
                  <TaskColumn 
                    title="Done" 
                    tasks={doneTasks}
                    status="done" 
                    count={doneTasks.length}
                    onStatusChange={updateTaskStatus}
                  />
                </div>
              </div>
              
              {/* Drag overlay - shows the task being dragged */}
              <DragOverlay>
                {activeTask ? <TaskCard task={activeTask} /> : null}
              </DragOverlay>
            </DndContext>
          </div>
          
          {/* Right sidebar */}
          <div className="w-80 border-l border-gray-800 p-6 bg-gray-800 overflow-y-auto">
            <div className="mb-6">
              <h2 className="text-lg font-medium text-white mb-4">
                Today's Huddles
              </h2>
              
              <HuddlesList 
                huddles={huddles} 
                onJoin={handleJoinHuddle}
              />
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-white mb-4">
                AI Assistant
              </h2>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="mb-4 max-h-60 overflow-y-auto">
                  <div className="text-sm text-gray-400">
                    Ask me anything about the project...
                  </div>
                </div>
                
                <form onSubmit={handleAiAssistantSubmit}>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={aiAssistantInput}
                      onChange={(e) => setAiAssistantInput(e.target.value)}
                      placeholder="Type to create tasks..."
                      className="flex-1 text-sm bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-300"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      <MessageSquare size={16} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;