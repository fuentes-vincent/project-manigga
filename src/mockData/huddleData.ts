// Define types for our huddle data
export interface User {
  id: string;
  name: string;
  avatar: string;
}

// Explicitly extend User interface with additional properties if needed in the future
export interface Participant extends User {
  status: 'Available' | 'In a huddle' | 'Do not disturb' | 'Away';
  // Add Participant-specific properties here when needed
}

export interface UpcomingHuddle {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  date: string;
  status: 'Scheduled' | 'In Progress' | 'Completed';
  participants: Participant[];
}

export interface RecentHuddle {
  id: string;
  title: string;
  date: string;
  duration: number;
  recordingUrl: string;
  participants: number;
  thumbnail: string;
}

export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  status: 'Available' | 'In a huddle' | 'Do not disturb' | 'Away';
  statusColor: string;
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  action: string;
}

export interface Activity {
  id: string;
  type: 'huddle_scheduled' | 'huddle_joined' | 'recording_shared' | 'huddle_ended';
  user: User;
  title: string;
  timestamp: string;
  timeAgo: string;
}

export interface HuddleData {
  stats: {
    totalHuddles: number;
    activeNow: number;
    teamMembers: number;
    scheduledToday: number;
  };
  upcomingHuddles: UpcomingHuddle[];
  recentHuddles: RecentHuddle[];
  teamAvailability: TeamMember[];
  quickActions: QuickAction[];
  recentActivities: Activity[];
}

// Mock data with proper types
export const huddleData: HuddleData = {
  stats: {
    totalHuddles: 156,
    activeNow: 3,
    teamMembers: 24,
    scheduledToday: 8
  },
  upcomingHuddles: [
    {
      id: "h1",
      title: "Weekly Sprint Planning",
      startTime: "2025-04-12T10:00:00+08:00",
      endTime: "2025-04-12T11:00:00+08:00",
      date: "Today",
      status: "Scheduled",
      participants: [
        {
          id: "u1",
          name: "Alex Johnson",
          avatar: "/images/boy.jpg",
          status: "Available"
        },
        {
          id: "u2",
          name: "Sarah Kim",
          avatar: "/images/girl-cry.jpg",
          status: "Available"
        },
        {
          id: "u3",
          name: "Michael Chen",
          avatar: "/images/boy.jpg",
          status: "Available"
        },
        {
          id: "u4",
          name: "Emily Rodriguez",
          avatar: "/images/girl-cry.jpg",
          status: "Available"
        }
      ]
    },
    {
      id: "h2",
      title: "UX Design Review",
      startTime: "2025-04-12T14:00:00+08:00",
      endTime: "2025-04-12T15:00:00+08:00",
      date: "Today",
      status: "In Progress",
      participants: [
        {
          id: "u2",
          name: "Sarah Kim",
          avatar: "/images/girl-cry.jpg",
          status: "Available"
        },
        {
          id: "u5",
          name: "David Wong",
          avatar: "/images/boy.jpg",
          status: "Available"
        },
        {
          id: "u6",
          name: "Lisa Thompson",
          avatar: "/images/girl-cry.jpg",
          status: "Available"
        }
      ]
    },
    {
      id: "h3",
      title: "Backend Architecture Discussion",
      startTime: "2025-04-13T11:00:00+08:00",
      endTime: "2025-04-13T12:00:00+08:00",
      date: "Tomorrow",
      status: "Scheduled",
      participants: [
        {
          id: "u1",
          name: "Alex Johnson",
          avatar: "/images/boy.jpg",
          status: "Available"
        },
        {
          id: "u3",
          name: "Michael Chen",
          avatar: "/images/boy.jpg",
          status: "Available"
        },
        {
          id: "u7",
          name: "Omar Patel",
          avatar: "/images/boy.jpg",
          status: "Available"
        },
        {
          id: "u8",
          name: "Jasmine Lee",
          avatar: "/images/girl-cry.jpg",
          status: "Available"
        }
      ]
    }
  ],
  recentHuddles: [
    {
      id: "h4",
      title: "Project Kickoff Meeting",
      date: "Yesterday",
      duration: 45,
      recordingUrl: "/mockData/recordings/meeting1.mp4",
      participants: 6,
      thumbnail: "/images/login-image.png"
    },
    {
      id: "h5",
      title: "Q1 Performance Review",
      date: "Yesterday",
      duration: 29,
      recordingUrl: "/mockData/recordings/meeting2.mp4",
      participants: 5,
      thumbnail: "/images/login-image.png"
    },
    {
      id: "h6",
      title: "Client Requirements Discussion",
      date: "2 days ago",
      duration: 60,
      recordingUrl: "/mockData/recordings/meeting3.mp4",
      participants: 12,
      thumbnail: "/images/login-image.png"
    }
  ],
  teamAvailability: [
    {
      id: "u1",
      name: "Alex Johnson",
      avatar: "/images/boy.jpg",
      status: "Available",
      statusColor: "bg-green-500"
    },
    {
      id: "u2",
      name: "Sarah Kim",
      avatar: "/images/girl-cry.jpg",
      status: "In a huddle",
      statusColor: "bg-yellow-500"
    },
    {
      id: "u3",
      name: "Michael Chen",
      avatar: "/images/boy.jpg",
      status: "Available",
      statusColor: "bg-green-500"
    },
    {
      id: "u4",
      name: "Emily Rodriguez",
      avatar: "/images/girl-cry.jpg",
      status: "Do not disturb",
      statusColor: "bg-red-500"
    },
    {
      id: "u5",
      name: "David Wong",
      avatar: "/images/boy.jpg",
      status: "In a huddle",
      statusColor: "bg-yellow-500"
    },
    {
      id: "u6",
      name: "Lisa Thompson",
      avatar: "/images/girl-cry.jpg",
      status: "In a huddle",
      statusColor: "bg-yellow-500"
    }
  ],
  quickActions: [
    {
      id: "qa1",
      title: "Schedule Huddle",
      icon: "Calendar",
      action: "scheduleHuddle"
    },
    {
      id: "qa2",
      title: "Join Active Huddle",
      icon: "Video",
      action: "joinHuddle"
    },
    {
      id: "qa3",
      title: "View Recordings",
      icon: "FileText",
      action: "viewRecordings"
    },
    {
      id: "qa4",
      title: "Send Invitation",
      icon: "Send",
      action: "sendInvitation"
    }
  ],
  recentActivities: [
    {
      id: "ra1",
      type: "huddle_scheduled",
      user: {
        id: "u1",
        name: "Alex Johnson",
        avatar: "/images/boy.jpg"
      },
      title: "Weekly Sprint Planning",
      timestamp: "2025-04-12T09:15:00+08:00",
      timeAgo: "45 minutes ago"
    },
    {
      id: "ra2",
      type: "huddle_joined",
      user: {
        id: "u2",
        name: "Sarah Kim",
        avatar: "/images/girl-cry.jpg"
      },
      title: "UX Design Review",
      timestamp: "2025-04-12T08:30:00+08:00",
      timeAgo: "1.5 hours ago"
    },
    {
      id: "ra3",
      type: "recording_shared",
      user: {
        id: "u3",
        name: "Michael Chen",
        avatar: "/images/boy.jpg"
      },
      title: "Project Kickoff Meeting",
      timestamp: "2025-04-11T16:45:00+08:00",
      timeAgo: "yesterday"
    },
    {
      id: "ra4",
      type: "huddle_ended",
      user: {
        id: "u5",
        name: "David Wong",
        avatar: "/images/boy.jpg"
      },
      title: "Q1 Performance Review",
      timestamp: "2025-04-11T15:30:00+08:00",
      timeAgo: "yesterday"
    }
  ]
};
