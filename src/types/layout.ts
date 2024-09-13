import { ReactNode } from 'react';

export interface BreadcrumbItem {
  label: string;
  icon: ReactNode;
}

export interface Tab {
  label: string;
  children: string;
  key: string;
}

export interface LayoutProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  setBreadcrumb: (breadcrumb: BreadcrumbItem[]) => void;
  tabs: Tab[];
  addTab: (label: string, children: string, key: string) => void;
  setActiveKey: (key: string) => void;
  activeTabKey: string;
}

export interface HeaderProps {
  background: string;
  breadcrumb: BreadcrumbItem[];
}

export interface ContentProps {
  background: string;
  tabs: Tab[];
  activeTabKey: string;
  setActiveTabKey: (key: string) => void;
  setTabs: (tabs: Tab[]) => void;
}