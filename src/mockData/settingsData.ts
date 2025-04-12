// Define types for user settings data
export interface UserProfile {
  fullName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  role: string;
}

// Mock data for the user profile
export const userProfileData: UserProfile = {
  fullName: "John Doe",
  email: "john.doe@example.com",
  phoneNumber: "+1 (555) 000-0000",
  avatar: "/images/girl-cry.jpg",
  role: "Product Manager"
};

// Define types for settings navigation
export interface SettingsNavItem {
  id: string;
  label: string;
  icon: string;
}

// Mock data for settings navigation
export const settingsNavItems: SettingsNavItem[] = [
  {
    id: "account",
    label: "Account",
    icon: "User"
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: "Palette"
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: "Bell"
  },
  {
    id: "billing",
    label: "Billing",
    icon: "CreditCard"
  },
  {
    id: "team",
    label: "Team",
    icon: "Users"
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: "Link"
  }
];

// For backward compatibility
export const settingsNavData = settingsNavItems;
