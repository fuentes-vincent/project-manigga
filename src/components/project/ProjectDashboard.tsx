import React, { useState } from 'react';
import { Task, TaskStatus } from '../../utils/types/project';
import { useStore } from '../../stores/Store';
import TaskColumn from './TaskColumn';
import HuddlesList from './HuddlesList';
import AiComponent from './AiComponent';
import { TaskPage } from '@/components/task/TaskPage';
import { Sidebar } from '../sidebar';
import { 
  Calendar, 
  Plus, 
  Sparkles, 
  LayoutGrid, 
  List,
  X 
} from 'lucide-react';
import { 
  DndContext, 
  DragEndEvent, 
  DragOverlay, 
  DragStartEvent, 
  PointerSensor, 
  useSensor, 
  useSensors 
} from '@dnd-kit/core';
import TaskCard from './TaskCard';
import { VideoCallModal } from './VideoCallModal';
import './project-dashboard.css';

export const ProjectDashboard: React.FC = () => {
  const { 
    tasks, 
    currentProject, 
    huddles,
    updateTaskStatus,
  } = useStore();
  
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [activeView, setActiveView] = useState<'board' | 'list' | 'calendar'>('board');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentHuddleUrl, setCurrentHuddleUrl] = useState<string | null>(null);
  const [currentHuddleTitle, setCurrentHuddleTitle] = useState<string>('Huddle');
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  
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
    console.log('Create new task');
  };
  
  const handleScheduleHuddle = () => {
    console.log('Schedule new huddle');
  };
  
  const handleJoinHuddle = (huddleId: string) => {
    const huddleToJoin = huddles.find(h => h.id === huddleId);
    if (huddleToJoin && huddleToJoin.roomUrl) {
      setCurrentHuddleUrl(huddleToJoin.roomUrl);
      setCurrentHuddleTitle(huddleToJoin.title);
      setShowVideoModal(true);
    } else {
      console.error('Huddle or room URL not found!', huddleId);
      // Handle error appropriately (e.g., show a notification)
    }
  };
  
  const handleCloseVideoModal = () => {
    setShowVideoModal(false);
    setCurrentHuddleUrl(null);
    setCurrentHuddleTitle('Huddle');
  };

  const toggleAiAssistant = () => {
    setShowAiAssistant(!showAiAssistant);
  };
  
  if (!currentProject) {
    return <div>No project selected</div>;
  }
  
  return (
    <div className="flex h-screen project-dashboard-container">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Area (Title, Tabs, Buttons) - Should be above the scrollable area */}
        <div className="p-6 shrink-0">
          <h1 className="text-2xl font-bold text-white mb-4">Project Dashboard</h1>
          {/* Navigation tabs */}
          <div className="flex mb-6 overflow-x-auto pb-2">
            <button 
              className={`py-2 px-4 flex items-center whitespace-nowrap ${activeView === 'board' ? 'nav-item-active' : 'text-gray-400'}`}
              onClick={() => setActiveView('board')}
            >
              <LayoutGrid size={16} className="mr-2 shrink-0" />
              Board
            </button>
            <button 
              className={`py-2 px-4 flex items-center whitespace-nowrap ${activeView === 'list' ? 'nav-item-active' : 'text-gray-400'}`}
              onClick={() => setActiveView('list')}
            >
              <List size={16} className="mr-2 shrink-0" />
              List
            </button>
            <button 
              className={`py-2 px-4 flex items-center whitespace-nowrap ${activeView === 'calendar' ? 'nav-item-active' : 'text-gray-400'}`}
              onClick={() => setActiveView('calendar')}
            >
              <Calendar size={16} className="mr-2 shrink-0" />
              Calendar
            </button>
          </div>
          {/* Action buttons */}
          <div className="flex flex-wrap gap-2 justify-end mb-6">
            <button
              onClick={handleScheduleHuddle}
              className="flex items-center text-sm bg-gray-800 border border-gray-700 rounded-md px-3 py-1.5 text-gray-300"
            >
              <Calendar size={16} className="mr-1.5 shrink-0" />
              Schedule Huddle
            </button>
            
            <button
              onClick={handleNewTask}
              className="flex items-center text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1.5"
            >
              <Plus size={16} className="mr-1.5 shrink-0" />
              New Task
            </button>
            
            <button
              onClick={toggleAiAssistant}
              className={`flex items-center text-sm ${showAiAssistant ? 'bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'} text-white rounded-md px-3 py-1.5`}
            >
              <Sparkles size={16} className="mr-1.5 shrink-0" />
              AI Assistant
            </button>
          </div>
        </div>
        
        {/* Main Scrollable Area (Board + Right Sidebar) */}
        <div className="flex-1 flex overflow-hidden">
          {/* Project content (Scrollable based on view) */}
          <div className="flex-1 p-6 pt-0 overflow-y-auto overflow-x-hidden">
            {/* Conditional Rendering based on activeView */}
            {activeView === 'board' && (
              <DndContext
                sensors={sensors}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <div className="grid grid-flow-col auto-cols-[minmax(280px,_1fr)] gap-4 h-full pb-4 overflow-x-auto">
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
            )}

            {/* Use TaskPage for List View */}
            {activeView === 'list' && (
              <TaskPage />
            )}

            {/* Placeholder for Calendar View */}
            {activeView === 'calendar' && (
              <div className="text-white">Calendar View Placeholder</div>
            )}
          </div>
          
          {/* Right sidebar (Hidden on smaller screens) */}
          <div className="hidden lg:block w-96 border-l border-gray-800 p-6 bg-gray-800 overflow-y-auto shrink-0">
            <div>
              <h2 className="text-lg font-medium text-white mb-4">
                Today&apos;s Huddles
              </h2>
              
              <HuddlesList 
                huddles={huddles} 
                onJoin={handleJoinHuddle}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Assistant Floating Chat */}
      {showAiAssistant && (
        <div className="fixed bottom-6 right-6 w-96 shadow-xl rounded-lg overflow-hidden z-50 bg-gray-900">
          <div className="p-3 flex justify-between items-center border-b border-gray-800">
            <h2 className="text-lg font-medium text-white flex items-center">
              <Sparkles size={18} className="mr-2" />
              Manigga AI Assistant
            </h2>
            <button 
              onClick={toggleAiAssistant}
              className="p-1 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
          <div className="h-[500px] max-h-[70vh]">
            <AiComponent hideHeader={true} className="h-full" />
          </div>
        </div>
      )}
      
      {/* Video Call Modal */}
      <VideoCallModal 
        isOpen={showVideoModal} 
        onClose={handleCloseVideoModal} 
        roomUrl={currentHuddleUrl}
        title={currentHuddleTitle}
      />
    </div>
  );
};

export default ProjectDashboard;