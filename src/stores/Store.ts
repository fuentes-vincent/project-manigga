import { create } from 'zustand';
import { createProjectSlice, ProjectSlice } from './slices/projectSlice';
import { createWorkspaceSlice, WorkspaceSlice } from './slices/workspaceSlice';

// Define the root store type with all slices
export type StoreState = ProjectSlice & WorkspaceSlice;

// Create the store with all slices
export const useStore = create<StoreState>((...a) => ({
  ...createProjectSlice(...a),
  ...createWorkspaceSlice(...a),
})); 