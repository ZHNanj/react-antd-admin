import { StateCreator } from 'zustand';
import { ReactNode } from 'react';

export interface BreadcrumbItem {
  label: string;
  icon: ReactNode;
}

export interface BreadcrumbSlice {
  breadcrumb: BreadcrumbItem[];
  setBreadcrumb: (breadcrumb: BreadcrumbItem[]) => void;
}

export const createBreadcrumbSlice: StateCreator<BreadcrumbSlice> = (set) => ({
  breadcrumb: [],
  setBreadcrumb: (breadcrumb) => set({ breadcrumb }),
});