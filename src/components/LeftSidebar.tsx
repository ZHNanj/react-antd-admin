import { Layout, Menu } from "antd";
import { FC, useEffect, useState } from "react";
import { useAppStore } from "../store/appStore";
import { MenuItem } from "../types/menu";

const { Sider } = Layout;

interface IProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const LeftSideBar: FC<IProps> = ({ collapsed, setCollapsed }) => {
  const { menuItems, activeTabKey, handleMenuClick } = useAppStore();
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    const findOpenKeys = (items: MenuItem[], targetKey: string, currentPath: string[] = []): string[] | null => {
      for (const item of items) {
        if (item.key === targetKey) {
          return currentPath;
        }
        if (item.children) {
          const childPath = findOpenKeys(item.children, targetKey, [...currentPath, item.key]);
          if (childPath) {
            return childPath;
          }
        }
      }
      return null;
    };

    const newOpenKeys = findOpenKeys(menuItems, activeTabKey);
    if (newOpenKeys) {
      setOpenKeys(prevOpenKeys => {
        const combinedKeys = [...new Set([...prevOpenKeys, ...newOpenKeys])];
        return combinedKeys;
      });
    }
  }, [activeTabKey, menuItems]);

  const onOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className='fixed overflow-auto h-screen inset-y-0 left-0 scrollbar-thin scrollbar-thumb-gray-300'>
      <div className="demo-logo-vertical" />
      <Menu 
        theme="dark" 
        mode="inline" 
        items={menuItems} 
        onClick={({ key }) => handleMenuClick(key)} 
        selectedKeys={[activeTabKey]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      />
    </Sider>
  );
};

export default LeftSideBar;