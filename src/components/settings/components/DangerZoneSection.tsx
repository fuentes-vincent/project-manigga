'use client'

import React, { useState } from 'react';
import { Button } from '@/components/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/components/ui/input';
import { AlertCircle } from 'lucide-react';

const DangerZoneSection: React.FC = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [confirmText, setConfirmText] = useState('');

  const handleDeleteRequest = () => {
    setDeleteModalOpen(true);
  };

  return (
    <div className="space-y-4 mt-8">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Danger Zone</h2>
      <div className="border border-red-200 rounded-md bg-red-50 dark:bg-red-900/20 dark:border-red-800/30">
        <div className="p-4 flex justify-between items-center">
          <div>
            <h3 className="font-medium text-red-800 dark:text-red-400">Delete account</h3>
            <p className="text-sm text-red-700 dark:text-red-300">
              Once you delete your account, there is no going back. Please be certain.
            </p>
          </div>
          <Button 
            variant="destructive"
            onClick={handleDeleteRequest}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Delete Account
          </Button>
        </div>
      </div>

      <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span>Delete Account</span>
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-sm text-gray-500">
              Please type <span className="font-semibold">delete my account</span> to confirm.
            </p>
            <Input
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="delete my account"
              className="w-full"
            />
          </div>
          <DialogFooter className="gap-2 sm:justify-end">
            <Button
              variant="outline"
              onClick={() => setDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              disabled={confirmText !== 'delete my account'}
              onClick={() => {
                alert('Account deletion would happen here in a real app');
                setDeleteModalOpen(false);
              }}
            >
              Delete Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DangerZoneSection;
