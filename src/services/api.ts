import { MenuItem } from '../types/menu';
import menuItemsData from '../mocks/menuItems.json';

export const getMenuItems = async (): Promise<MenuItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(menuItemsData.menuItems), 500); // 模拟网络延迟
  });
};