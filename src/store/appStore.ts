import { create } from 'zustand';
import { MenuItem } from '../types/menu';
import { iconMap } from '../utils/iconMapping';

interface AppState {
  menuItems: MenuItem[];
  setMenuItems: (items: MenuItem[]) => void;
  activeTabKey: string;
  setActiveTabKey: (key: string) => void;
  tabs: { label: string; children: string; key: string }[];
  setTabs: (tabs: { label: string; children: string; key: string }[]) => void;
  breadcrumb: { label: string; icon: React.ReactNode }[];
  setBreadcrumb: (breadcrumb: { label: string; icon: React.ReactNode }[]) => void;
  handleMenuClick: (key: string) => void;
  updateBreadcrumb: (key: string) => void;
}

const mapMenuItems = (items: MenuItem[]): MenuItem[] => {
  return items.map(item => ({
    ...item,
    icon: iconMap[item.key],
    children: item.children ? mapMenuItems(item.children) : undefined,
  }));
};

const findItemAndParents = (items: MenuItem[], key: string, parents: MenuItem[] = []): [MenuItem | undefined, MenuItem[]] => {
  for (const item of items) {
    if (item.key === key) {
      return [item, parents];
    }
    if (item.children) {
      const [found, foundParents] = findItemAndParents(item.children, key, [...parents, item]);
      if (found) {
        return [found, foundParents];
      }
    }
  }
  return [undefined, []];
};

export const useAppStore = create<AppState>((set, get) => ({
  menuItems: [],
  setMenuItems: (items: MenuItem[]) => set({ menuItems: mapMenuItems(items) }),
  activeTabKey: '',
  setActiveTabKey: (key) => {
    set({ activeTabKey: key });
    get().updateBreadcrumb(key);
  },
  tabs: [],
  setTabs: (tabs) => set({ tabs }),
  breadcrumb: [],
  setBreadcrumb: (breadcrumb) => set({ breadcrumb }),
  handleMenuClick: (key) => {
    const { menuItems, tabs, setTabs, setActiveTabKey } = get();

    const [selectedItem, parents] = findItemAndParents(menuItems, key);
    
    if (selectedItem) {
      const existingTab = tabs.find(tab => tab.key === selectedItem.key);
      if (!existingTab) {
        setTabs([...tabs, { label: selectedItem.label, children: `Content of ${selectedItem.label}`, key: selectedItem.key }]);
      }
      setActiveTabKey(selectedItem.key);
    }
  },
  updateBreadcrumb: (key) => {
    const { menuItems, setBreadcrumb } = get();
    const [selectedItem, parents] = findItemAndParents(menuItems, key);
    
    if (selectedItem) {
      const breadcrumb = [
        ...parents.map(item => ({ label: item.label, icon: item.icon })),
        { label: selectedItem.label, icon: selectedItem.icon }
      ];
      
      setBreadcrumb(breadcrumb);
    }
  },
}));