// Define types for workspace data
export interface WorkspaceUser {
  id: string;
  name: string;
  avatar: string;
}

export interface Workspace {
  id: string;
  letter: string;
  color: string;
  name: string;
  description: string;
  members: WorkspaceUser[];
  lastActivity: string;
}

// Mock data for workspaces
export const workspacesData: Workspace[] = [
  {
    id: "thryve",
    letter: "T",
    color: "bg-blue-100",
    name: "Thryve",
    description: "2024 Q1 Marketing Materials and Assets",
    members: [
      { id: "user1", name: "Jane Smith", avatar: "/images/boy.jpg" },
      { id: "user2", name: "Alex Chen", avatar: "/images/girl-cry.jpg" },
      { id: "user3", name: "Morgan Lee", avatar: "/images/boy.jpg" }
    ],
    lastActivity: "2 hours ago"
  },
  {
    id: "product-design",
    letter: "P",
    color: "bg-purple-100",
    name: "Product Design",
    description: "UI/UX Design Projects and Resources",
    members: [
      { id: "user4", name: "Taylor Wong", avatar: "/images/boy.jpg" },
      { id: "user5", name: "Jordan Reed", avatar: "/images/girl-cry.jpg" }
    ],
    lastActivity: "5 hours ago"
  },
  {
    id: "development",
    letter: "D",
    color: "bg-green-100",
    name: "Development",
    description: "Frontend and Backend Development Projects",
    members: [
      { id: "user6", name: "Casey Park", avatar: "/images/boy.jpg" },
      { id: "user2", name: "Alex Chen", avatar: "/images/girl-cry.jpg" },
      { id: "user7", name: "Skyler Kim", avatar: "/images/boy.jpg" },
      { id: "user8", name: "Riley Johnson", avatar: "/images/girl-cry.jpg" }
    ],
    lastActivity: "1 day ago"
  },
  {
    id: "research",
    letter: "R",
    color: "bg-yellow-100",
    name: "Research",
    description: "Market Research and Analysis",
    members: [
      { id: "user1", name: "Jane Smith", avatar: "/images/boy.jpg" },
      { id: "user5", name: "Jordan Reed", avatar: "/images/girl-cry.jpg" }
    ],
    lastActivity: "2 days ago"
  },
  {
    id: "content-creation",
    letter: "C",
    color: "bg-red-100",
    name: "Content Creation",
    description: "Blog Posts and Social Media Content",
    members: [
      { id: "user3", name: "Morgan Lee", avatar: "/images/boy.jpg" },
      { id: "user8", name: "Riley Johnson", avatar: "/images/girl-cry.jpg" }
    ],
    lastActivity: "3 days ago"
  }
];

// Navigation items for workspace sidebar
export interface WorkspaceNavItem {
  id: string;
  label: string;
  icon: string;
}

export const workspaceNavItems: WorkspaceNavItem[] = [
  {
    id: "all",
    label: "All Workspaces",
    icon: "Grid"
  },
  {
    id: "shared",
    label: "Shared with me",
    icon: "Share"
  },
  {
    id: "recent",
    label: "Recent",
    icon: "Clock"
  },
  {
    id: "starred",
    label: "Starred",
    icon: "Star"
  }
];
