import { create } from 'zustand';
import { createProjectSlice, ProjectSlice } from './slices/projectSlice';

// Define the root store type with all slices
export type StoreState = ProjectSlice;

// Create the store with all slices
export const useStore = create<StoreState>((...a) => ({
  ...createProjectSlice(...a),
})); 