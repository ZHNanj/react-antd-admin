import { StateCreator } from 'zustand';
import { MenuItem } from '../types/menu';
import { iconMap } from '../utils/iconMapping';

export interface MenuSlice {
  menuItems: MenuItem[];
  setMenuItems: (items: MenuItem[]) => void;
  findItemAndParents: (key: string) => [MenuItem | undefined, MenuItem[]];
}

const mapMenuItems = (items: MenuItem[]): MenuItem[] => {
  return items.map(item => ({
    ...item,
    icon: iconMap[item.key],
    children: item.children ? mapMenuItems(item.children) : undefined,
  }));
};

export const createMenuSlice: StateCreator<MenuSlice> = (set, get) => ({
  menuItems: [],
  setMenuItems: (items) => set({ menuItems: mapMenuItems(items) }),
  findItemAndParents: (key) => {
    const findItem = (items: MenuItem[], parents: MenuItem[] = []): [MenuItem | undefined, MenuItem[]] => {
      for (const item of items) {
        if (item.key === key) return [item, parents];
        if (item.children) {
          const [found, foundParents] = findItem(item.children, [...parents, item]);
          if (found) return [found, foundParents];
        }
      }
      return [undefined, []];
    };
    return findItem(get().menuItems);
  },
});