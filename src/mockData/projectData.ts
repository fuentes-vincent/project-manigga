// Types
export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  avatarUrl?: string;
}

export type ProjectStatus = 'In Progress' | 'Planning' | 'In Review' | 'Final Review';

export interface ProjectCardData {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: ProjectStatus;
  team: TeamMember[];
  color: string; // e.g., 'bg-blue-500', 'bg-green-500'
}

// Mock Data
const mockTeam: TeamMember[] = [
  { id: '1', name: 'Victor D', initials: 'VD', avatarUrl: '/images/avatars/boy.jpg' },
  { id: '2', name: 'Jane S', initials: 'JS', avatarUrl: '/images/avatars/girl-cry.jpg' },
  { id: '3', name: 'Scarlett J', initials: 'SJ', avatarUrl: '/images/avatars/girl-moan.jpg' },
  { id: '4', name: 'Robert K', initials: 'RK' }, // No avatar
];

export const mockProjects: ProjectCardData[] = [
  {
    id: 'p1',
    title: 'Website Redesign',
    description: 'Redesign and development of company website with modern UI/UX',
    progress: 75,
    status: 'In Progress',
    team: [mockTeam[0], mockTeam[1], mockTeam[2]],
    color: 'bg-blue-500',
  },
  {
    id: 'p2',
    title: 'Mobile App Development',
    description: 'Native mobile application for iOS and Android platforms',
    progress: 45,
    status: 'Planning',
    team: [mockTeam[0], mockTeam[3]],
    color: 'bg-green-500',
  },
  {
    id: 'p3',
    title: 'Marketing Campaign',
    description: 'Q1 2024 digital marketing campaign across multiple channels',
    progress: 20,
    status: 'In Review',
    team: [mockTeam[1], mockTeam[2], mockTeam[3]],
    color: 'bg-orange-500',
  },
  {
    id: 'p4',
    title: 'Product Launch',
    description: 'New product launch preparation and coordination',
    progress: 60,
    status: 'In Progress',
    team: [mockTeam[0], mockTeam[1]],
    color: 'bg-red-500',
  },
  {
    id: 'p5',
    title: 'Data Analytics Platform',
    description: 'Internal analytics dashboard development',
    progress: 90,
    status: 'Final Review',
    team: [mockTeam[1], mockTeam[2], mockTeam[3]],
    color: 'bg-blue-600',
  },
  {
    id: 'p6',
    title: 'Customer Support System',
    description: 'Implementation of new customer support platform',
    progress: 30,
    status: 'Planning',
    team: [mockTeam[0], mockTeam[3]],
    color: 'bg-teal-500',
  },
];

// Export the team data as well if needed elsewhere
export { mockTeam };
