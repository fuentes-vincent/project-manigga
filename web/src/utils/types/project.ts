export type TaskStatus = 'todo' | 'in-progress' | 'review' | 'done';

export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  assignees: User[];
  dueDate: Date;
  commentsCount: number;
  attachmentsCount: number;
};

export type Project = {
  id: string;
  name: string;
  description?: string;
  progress: number;
  tasksCompleted: number;
  totalTasks: number;
};

export type Huddle = {
  id: string;
  title: string;
  time: Date | string;
  participants: User[];
  roomUrl?: string;
}; 