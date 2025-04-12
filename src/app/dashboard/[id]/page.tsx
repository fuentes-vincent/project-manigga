'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Dashboard } from '@/components/dashboard';

export default function WorkspaceDashboardPage() {
  const params = useParams();
  const workspaceId = params.id as string;
  
  return (
    <div className="min-h-screen">
      <Dashboard workspaceId={workspaceId} />
    </div>
  );
}
