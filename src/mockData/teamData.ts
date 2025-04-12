// Define types for our team data
export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface Team {
  id: string;
  name: string;
  category: string;
  icon: string;
  backgroundColor: string;
  members: TeamMember[];
  projects: number;
  lastActive: string;
}

export interface TeamData {
  teams: Team[];
}

// Mock data with proper types
export const teamData: TeamData = {
  teams: [
    {
      id: "t1",
      name: "Product Design",
      category: "Design",
      icon: "🎨",
      backgroundColor: "#4F46E5",
      members: [
        {
          id: "u1",
          name: "Alex Johnson",
          avatar: "/images/boy.jpg",
          role: "Lead Designer"
        },
        {
          id: "u2",
          name: "Sarah Kim",
          avatar: "/images/girl-cry.jpg",
          role: "UI Designer"
        },
        {
          id: "u3",
          name: "Michael Chen",
          avatar: "/images/boy.jpg",
          role: "UX Designer"
        }
      ],
      projects: 8,
      lastActive: "2 hours ago"
    },
    {
      id: "t2",
      name: "Frontend Development",
      category: "Engineering",
      icon: "💻",
      backgroundColor: "#10B981",
      members: [
        {
          id: "u4",
          name: "Emily Rodriguez",
          avatar: "/images/girl-cry.jpg",
          role: "Frontend Lead"
        },
        {
          id: "u5",
          name: "David Wong",
          avatar: "/images/boy.jpg",
          role: "Frontend Developer"
        },
        {
          id: "u6",
          name: "Lisa Thompson",
          avatar: "/images/girl-cry.jpg",
          role: "Frontend Developer"
        }
      ],
      projects: 6,
      lastActive: "1 hour ago"
    },
    {
      id: "t3",
      name: "Marketing",
      category: "Growth",
      icon: "📈",
      backgroundColor: "#F59E0B",
      members: [
        {
          id: "u7",
          name: "Omar Patel",
          avatar: "/images/boy.jpg",
          role: "Marketing Manager"
        },
        {
          id: "u8",
          name: "Jasmine Lee",
          avatar: "/images/girl-cry.jpg",
          role: "Content Strategist"
        },
        {
          id: "u9",
          name: "Robert Kim",
          avatar: "/images/boy.jpg",
          role: "Social Media Specialist"
        }
      ],
      projects: 4,
      lastActive: "30 minutes ago"
    },
    {
      id: "t4",
      name: "Backend Development",
      category: "Engineering",
      icon: "⚙️",
      backgroundColor: "#6366F1",
      members: [
        {
          id: "u10",
          name: "Carlos Mendez",
          avatar: "/images/boy.jpg",
          role: "Backend Lead"
        },
        {
          id: "u11",
          name: "Priya Sharma",
          avatar: "/images/girl-cry.jpg",
          role: "Backend Developer"
        },
        {
          id: "u12",
          name: "Thomas Wright",
          avatar: "/images/boy.jpg",
          role: "Database Engineer"
        }
      ],
      projects: 7,
      lastActive: "45 minutes ago"
    },
    {
      id: "t5",
      name: "Customer Success",
      category: "Operations",
      icon: "🤝",
      backgroundColor: "#EC4899",
      members: [
        {
          id: "u13",
          name: "Hannah Johnson",
          avatar: "/images/girl-cry.jpg",
          role: "Customer Success Manager"
        },
        {
          id: "u14",
          name: "Kevin Liu",
          avatar: "/images/boy.jpg",
          role: "Customer Support"
        },
        {
          id: "u15",
          name: "Madison Clark",
          avatar: "/images/girl-cry.jpg",
          role: "Customer Support"
        }
      ],
      projects: 5,
      lastActive: "3 hours ago"
    },
    {
      id: "t6",
      name: "Data Science",
      category: "Analytics",
      icon: "📊",
      backgroundColor: "#8B5CF6",
      members: [
        {
          id: "u16",
          name: "Raj Patel",
          avatar: "/images/boy.jpg",
          role: "Data Scientist"
        },
        {
          id: "u17",
          name: "Emma Wilson",
          avatar: "/images/girl-cry.jpg",
          role: "Data Analyst"
        },
        {
          id: "u18",
          name: "Daniel Lee",
          avatar: "/images/boy.jpg",
          role: "Machine Learning Engineer"
        }
      ],
      projects: 3,
      lastActive: "4 hours ago"
    },
    {
      id: "t7",
      name: "R & D Development",
      category: "Engineering",
      icon: "📊",
      backgroundColor: "#8B5CF6",
      members: [
        {
          id: "u16",
          name: "Raj Patel",
          avatar: "/images/boy.jpg",
          role: "Data Scientist"
        },
        {
          id: "u17",
          name: "Emma Wilson",
          avatar: "/images/girl-cry.jpg",
          role: "Data Analyst"
        },
        {
          id: "u18",
          name: "Daniel Lee",
          avatar: "/images/boy.jpg",
          role: "Machine Learning Engineer"
        }
      ],
      projects: 3,
      lastActive: "4 hours ago"
    }
  ]
};
