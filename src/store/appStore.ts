import { create } from 'zustand';
import { MenuSlice, createMenuSlice } from './menuSlice';
import { TabsSlice, createTabsSlice } from './tabsSlice';
import { BreadcrumbSlice, createBreadcrumbSlice } from './breadcrumbSlice';

type AppState = MenuSlice & TabsSlice & BreadcrumbSlice;

export const useAppStore = create<AppState>()((...a) => ({
  ...createMenuSlice(...a),
  ...createTabsSlice(...a),
  ...createBreadcrumbSlice(...a),
}));

export const useAppActions = () => {
  const { findItemAndParents, addTab, setBreadcrumb, setActiveTabKey } = useAppStore();

  const handleMenuClick = (key: string) => {
    const [item, parents] = findItemAndParents(key);
    if (item) {
      addTab({ label: item.label, children: `Content of ${item.label}`, key: item.key });
      setBreadcrumb([
        ...parents.map(parent => ({ label: parent.label, icon: parent.icon })),
        { label: item.label, icon: item.icon },
      ]);
      setActiveTabKey(item.key);
    }
  };

  return { handleMenuClick };
};