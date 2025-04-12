import { StateCreator } from 'zustand';
import { workspacesData } from '../../mockData/workspaceData';

export interface WorkspaceSlice {
  workspaces: typeof workspacesData;
  activeWorkspaceId: string;
  
  // Actions
  setActiveWorkspace: (workspaceId: string) => void;
}

export const createWorkspaceSlice: StateCreator<WorkspaceSlice> = (set) => ({
  workspaces: workspacesData,
  // Default to first workspace, or use an empty string if no workspaces exist
  activeWorkspaceId: workspacesData.length > 0 ? workspacesData[0].id : '',
  
  setActiveWorkspace: (workspaceId: string) => {
    set({ activeWorkspaceId: workspaceId });
  },
});
