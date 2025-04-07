import { StateCreator } from 'zustand';
import { Project, Task, User, Huddle } from '../../utils/types/project';

export interface ProjectSlice {
  projects: Project[];
  currentProject: Project | null;
  tasks: Task[];
  users: User[];
  huddles: Huddle[];
  
  // Actions
  setCurrentProject: (projectId: string) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTaskStatus: (taskId: string, status: Task['status']) => void;
  deleteTask: (taskId: string) => void;
  addHuddle: (huddle: Omit<Huddle, 'id'>) => void;
}

// Mock data for initial state
const mockUsers: User[] = [
  { id: '1', name: 'Victor Doe', avatar: '/images/avatars/boy.jpg' },
  { id: '2', name: 'Jane Smith', avatar: '/images/avatars/girl-cry.jpg' },
  { id: '3', name: 'Scarlett Johnson', avatar: '/images/avatars/girl-moan.jpg' },
];

// Create the due date for April 3rd
const getApril3rd = () => {
  const date = new Date();
  date.setMonth(3); // April (0-indexed)
  date.setDate(3);
  return date;
};

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Update landing page design',
    description: 'Implement new hero section and improve mobile responsiveness',
    status: 'todo',
    assignees: [mockUsers[0], mockUsers[1]],
    dueDate: getApril3rd(),
    commentsCount: 4,
    attachmentsCount: 2,
  },
  {
    id: '2',
    title: 'Update landing page design',
    description: 'Implement new hero section and improve mobile responsiveness',
    status: 'in-progress',
    assignees: [mockUsers[0], mockUsers[2]],
    dueDate: getApril3rd(),
    commentsCount: 4,
    attachmentsCount: 2,
  },
  {
    id: '3',
    title: 'Update landing page design',
    description: 'Implement new hero section and improve mobile responsiveness',
    status: 'review',
    assignees: [mockUsers[1], mockUsers[2]],
    dueDate: getApril3rd(),
    commentsCount: 4,
    attachmentsCount: 2,
  },
  {
    id: '4',
    title: 'Update landing page design',
    description: 'Implement new hero section and improve mobile responsiveness',
    status: 'done',
    assignees: [mockUsers[0], mockUsers[2]],
    dueDate: getApril3rd(),
    commentsCount: 4,
    attachmentsCount: 2,
  },
];

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    progress: 65,
    tasksCompleted: 24,
    totalTasks: 36,
  }
];

const mockHuddles: Huddle[] = [
  {
    id: '1',
    title: 'Daily Standup',
    time: new Date(new Date().setHours(10, 0, 0, 0)),
    participants: [mockUsers[0], mockUsers[1], mockUsers[2]],
    roomUrl: `${process.env.NEXT_PUBLIC_ROOM_URL_STANDUP}`,
  },
  {
    id: '2',
    title: 'Design Review',
    time: new Date(new Date().setHours(14, 0, 0, 0)),
    participants: [mockUsers[0], mockUsers[1], mockUsers[2]],
    roomUrl: `${process.env.NEXT_PUBLIC_ROOM_URL_DESIGN_REVIEW}`,
  }
];

export const createProjectSlice: StateCreator<ProjectSlice> = (set, get) => ({
  projects: mockProjects,
  currentProject: mockProjects[0],
  tasks: mockTasks,
  users: mockUsers,
  huddles: mockHuddles,

  setCurrentProject: (projectId: string) => {
    const project = get().projects.find(p => p.id === projectId) || null;
    set({ currentProject: project });
  },

  addTask: (task: Omit<Task, 'id'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
    };
    set(state => ({ tasks: [...state.tasks, newTask] }));
  },

  updateTaskStatus: (taskId: string, status: Task['status']) => {
    set(state => ({
      tasks: state.tasks.map(task => 
        task.id === taskId ? { ...task, status } : task
      )
    }));
  },

  deleteTask: (taskId: string) => {
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== taskId)
    }));
  },

  addHuddle: (huddle: Omit<Huddle, 'id'>) => {
    const newHuddle: Huddle = {
      ...huddle,
      id: Date.now().toString(),
    };
    set(state => ({ huddles: [...state.huddles, newHuddle] }));
  }
}); 