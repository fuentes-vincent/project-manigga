'use client'

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface PersonalInfoFormProps {
  initialName: string;
  initialEmail: string;
  initialPhone: string;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ 
  initialName, 
  initialEmail, 
  initialPhone 
}) => {
  const [formData, setFormData] = useState({
    fullName: initialName,
    email: initialEmail,
    phoneNumber: initialPhone
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Personal Information</h3>
      
      <div className="space-y-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex justify-end">
          <Button type="button" className="bg-blue-600 hover:bg-blue-700 text-white">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
