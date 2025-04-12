import React from 'react';
import { User, Palette, Bell, Shield, Globe, HelpCircle, CreditCard, Users, Link } from 'lucide-react';
import { SettingsNavItem } from '@/mockData/settingsData';
import { cn } from '@/lib/utils';

interface SettingsNavProps {
  items: SettingsNavItem[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const SettingsNav: React.FC<SettingsNavProps> = ({ 
  items,
  activeSection, 
  onSectionChange 
}) => {
  // Function to get the appropriate icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'User':
        return <User className="h-4 w-4 mr-3" />;
      case 'Palette':
        return <Palette className="h-4 w-4 mr-3" />;
      case 'Bell':
        return <Bell className="h-4 w-4 mr-3" />;
      case 'Shield':
        return <Shield className="h-4 w-4 mr-3" />;
      case 'Globe':
        return <Globe className="h-4 w-4 mr-3" />;
      case 'HelpCircle':
        return <HelpCircle className="h-4 w-4 mr-3" />;
      case 'CreditCard':
        return <CreditCard className="h-4 w-4 mr-3" />;
      case 'Users':
        return <Users className="h-4 w-4 mr-3" />;
      case 'Link':
        return <Link className="h-4 w-4 mr-3" />;
      default:
        return null;
    }
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h2>
      </div>
      <ul className="py-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "flex items-center w-full px-4 py-3 text-sm font-medium transition-colors",
                activeSection === item.id
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              {getIcon(item.icon)}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SettingsNav;
