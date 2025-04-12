// Types for dashboard data
export interface DashboardMetric {
  title: string;
  value: string | number;
  change: number; // percentage change
  icon: string;
}

export interface RevenueData {
  month: string;
  amount: number;
}

export interface ProjectStatus {
  status: string;
  count: number;
  color: string;
}

export interface Activity {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  target: string;
  timestamp: string;
  workspaceId: string;
}

export interface WorkspaceDashboardData {
  workspaceId: string;
  metrics: {
    totalRevenue: number;
    activeProjects: number;
    taskCompletion: number;
    teamMembers: number;
  };
  revenueData: RevenueData[];
  projectStatus: ProjectStatus[];
  recentActivities: Activity[];
}

// Mock data for each workspace
export const dashboardData: WorkspaceDashboardData[] = [
  {
    workspaceId: "teamsync",
    metrics: {
      totalRevenue: 84254,
      activeProjects: 12,
      taskCompletion: 87,
      teamMembers: 8
    },
    revenueData: [
      { month: "Jan", amount: 5200 },
      { month: "Feb", amount: 7800 },
      { month: "Mar", amount: 9200 },
      { month: "Apr", amount: 8400 },
      { month: "May", amount: 11600 },
      { month: "Jun", amount: 13800 }
    ],
    projectStatus: [
      { status: "Completed", count: 14, color: "#4ade80" },
      { status: "In Progress", count: 8, color: "#3b82f6" },
      { status: "On Hold", count: 3, color: "#f97316" },
      { status: "Cancelled", count: 1, color: "#ef4444" }
    ],
    recentActivities: [
      {
        id: "act1",
        user: { name: "Jane Smith", avatar: "/images/boy.jpg" },
        action: "uploaded new files to",
        target: "Q1 Marketing Assets",
        timestamp: "10 minutes ago",
        workspaceId: "teamsync"
      },
      {
        id: "act2",
        user: { name: "Alex Chen", avatar: "/images/girl-cry.jpg" },
        action: "commented on",
        target: "Brand Guidelines",
        timestamp: "1 hour ago",
        workspaceId: "teamsync"
      },
      {
        id: "act3",
        user: { name: "Morgan Lee", avatar: "/images/boy.jpg" },
        action: "completed task",
        target: "Social Media Calendar",
        timestamp: "2 hours ago",
        workspaceId: "teamsync"
      }
    ]
  },
  {
    workspaceId: "product-design",
    metrics: {
      totalRevenue: 67890,
      activeProjects: 8,
      taskCompletion: 92,
      teamMembers: 6
    },
    revenueData: [
      { month: "Jan", amount: 4800 },
      { month: "Feb", amount: 6200 },
      { month: "Mar", amount: 7500 },
      { month: "Apr", amount: 8900 },
      { month: "May", amount: 10200 },
      { month: "Jun", amount: 12800 }
    ],
    projectStatus: [
      { status: "Completed", count: 18, color: "#4ade80" },
      { status: "In Progress", count: 6, color: "#3b82f6" },
      { status: "On Hold", count: 2, color: "#f97316" },
      { status: "Cancelled", count: 0, color: "#ef4444" }
    ],
    recentActivities: [
      {
        id: "act4",
        user: { name: "Taylor Wong", avatar: "/images/boy.jpg" },
        action: "created new prototype for",
        target: "Mobile App Redesign",
        timestamp: "30 minutes ago",
        workspaceId: "product-design"
      },
      {
        id: "act5",
        user: { name: "Jordan Reed", avatar: "/images/girl-cry.jpg" },
        action: "updated wireframes for",
        target: "E-commerce Website",
        timestamp: "3 hours ago",
        workspaceId: "product-design"
      }
    ]
  },
  {
    workspaceId: "development",
    metrics: {
      totalRevenue: 125000,
      activeProjects: 15,
      taskCompletion: 78,
      teamMembers: 12
    },
    revenueData: [
      { month: "Jan", amount: 15200 },
      { month: "Feb", amount: 18800 },
      { month: "Mar", amount: 16500 },
      { month: "Apr", amount: 19200 },
      { month: "May", amount: 23600 },
      { month: "Jun", amount: 28400 }
    ],
    projectStatus: [
      { status: "Completed", count: 22, color: "#4ade80" },
      { status: "In Progress", count: 15, color: "#3b82f6" },
      { status: "On Hold", count: 4, color: "#f97316" },
      { status: "Cancelled", count: 2, color: "#ef4444" }
    ],
    recentActivities: [
      {
        id: "act6",
        user: { name: "Casey Park", avatar: "/images/boy.jpg" },
        action: "deployed new version of",
        target: "API Gateway",
        timestamp: "15 minutes ago",
        workspaceId: "development"
      },
      {
        id: "act7",
        user: { name: "Alex Chen", avatar: "/images/girl-cry.jpg" },
        action: "fixed bug in",
        target: "User Authentication",
        timestamp: "5 hours ago",
        workspaceId: "development"
      },
      {
        id: "act8",
        user: { name: "Skyler Kim", avatar: "/images/boy.jpg" },
        action: "merged pull request for",
        target: "Database Migration",
        timestamp: "1 day ago",
        workspaceId: "development"
      }
    ]
  },
  {
    workspaceId: "research",
    metrics: {
      totalRevenue: 42750,
      activeProjects: 5,
      taskCompletion: 95,
      teamMembers: 4
    },
    revenueData: [
      { month: "Jan", amount: 3500 },
      { month: "Feb", amount: 4200 },
      { month: "Mar", amount: 5800 },
      { month: "Apr", amount: 6700 },
      { month: "May", amount: 7900 },
      { month: "Jun", amount: 9300 }
    ],
    projectStatus: [
      { status: "Completed", count: 7, color: "#4ade80" },
      { status: "In Progress", count: 4, color: "#3b82f6" },
      { status: "On Hold", count: 1, color: "#f97316" },
      { status: "Cancelled", count: 0, color: "#ef4444" }
    ],
    recentActivities: [
      {
        id: "act9",
        user: { name: "Jane Smith", avatar: "/images/boy.jpg" },
        action: "completed analysis for",
        target: "Market Trends Report",
        timestamp: "2 hours ago",
        workspaceId: "research"
      },
      {
        id: "act10",
        user: { name: "Jordan Reed", avatar: "/images/girl-cry.jpg" },
        action: "scheduled user interviews for",
        target: "Customer Feedback Study",
        timestamp: "1 day ago",
        workspaceId: "research"
      }
    ]
  },
  {
    workspaceId: "content-creation",
    metrics: {
      totalRevenue: 32150,
      activeProjects: 9,
      taskCompletion: 82,
      teamMembers: 5
    },
    revenueData: [
      { month: "Jan", amount: 2800 },
      { month: "Feb", amount: 3600 },
      { month: "Mar", amount: 4200 },
      { month: "Apr", amount: 5100 },
      { month: "May", amount: 6300 },
      { month: "Jun", amount: 7800 }
    ],
    projectStatus: [
      { status: "Completed", count: 12, color: "#4ade80" },
      { status: "In Progress", count: 8, color: "#3b82f6" },
      { status: "On Hold", count: 2, color: "#f97316" },
      { status: "Cancelled", count: 1, color: "#ef4444" }
    ],
    recentActivities: [
      {
        id: "act11",
        user: { name: "Morgan Lee", avatar: "/images/boy.jpg" },
        action: "published new article",
        target: "Content Marketing Trends 2025",
        timestamp: "45 minutes ago",
        workspaceId: "content-creation"
      },
      {
        id: "act12",
        user: { name: "Riley Johnson", avatar: "/images/girl-cry.jpg" },
        action: "created social media campaign for",
        target: "Product Launch",
        timestamp: "4 hours ago",
        workspaceId: "content-creation"
      }
    ]
  }
];
