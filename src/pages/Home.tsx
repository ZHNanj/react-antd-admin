import React, { useState, useEffect, useRef } from 'react';
import { Layout, theme } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftSideBar from '../components/LeftSidebar';
import { useAppStore, useAppActions } from '../store/appStore';
import { getMenuItems } from '../services/api';
import Content from '../components/Content';

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);
  const { setMenuItems, menuItems } = useAppStore();
  const { handleMenuClick } = useAppActions();
  const initialMenuItemSet = useRef(false);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const items = await getMenuItems();
        setMenuItems(items);
      } catch (error) {
        console.error('获取菜单项失败:', error);
      }
    };

    fetchMenuItems();
  }, [setMenuItems]);

  useEffect(() => {
    if (menuItems.length > 0 && !initialMenuItemSet.current) {
      const firstMenuItem = menuItems[0];
      const firstChildKey = firstMenuItem.children?.[0]?.key || firstMenuItem.key;
      handleMenuClick(firstChildKey);
      initialMenuItemSet.current = true;
    }
  }, [menuItems, handleMenuClick]);

  return (
    <Layout hasSider>
      <LeftSideBar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
      />
      <Layout className={`${collapsed ? `ml-20` : `ml-[200px]`}`}>
        <Header background={colorBgContainer} />
        <Content background={colorBgContainer} />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Home;