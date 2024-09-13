import { StateCreator } from 'zustand';

export interface Tab {
  label: string;
  children: string;
  key: string;
}

export interface TabsSlice {
  tabs: Tab[];
  activeTabKey: string;
  setTabs: (tabs: Tab[]) => void;
  setActiveTabKey: (key: string) => void;
  addTab: (tab: Tab) => void;
  removeTab: (key: string) => void;
}

export const createTabsSlice: StateCreator<TabsSlice> = (set, get) => ({
  tabs: [],
  activeTabKey: '',
  setTabs: (tabs) => set({ tabs }),
  setActiveTabKey: (key) => set({ activeTabKey: key }),
  addTab: (tab) => {
    const { tabs } = get();
    if (!tabs.find(t => t.key === tab.key)) {
      set({ tabs: [...tabs, tab], activeTabKey: tab.key });
    } else {
      set({ activeTabKey: tab.key });
    }
  },
  removeTab: (key) => {
    const { tabs, activeTabKey } = get();
    const newTabs = tabs.filter(tab => tab.key !== key);
    set({ tabs: newTabs });
    if (key === activeTabKey && newTabs.length) {
      set({ activeTabKey: newTabs[newTabs.length - 1].key });
    }
  },
});