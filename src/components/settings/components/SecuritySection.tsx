'use client'

import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const SecuritySection: React.FC = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Security</h2>
      <div className="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="two-factor-auth" className="text-base font-medium">Two-Factor Authentication</Label>
            <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account</p>
          </div>
          <Switch 
            id="two-factor-auth" 
            checked={twoFactorEnabled} 
            onCheckedChange={setTwoFactorEnabled} 
          />
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
