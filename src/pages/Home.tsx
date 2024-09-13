import React, { useEffect, useState } from 'react';
import { Layout, theme } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftSideBar from '../components/LeftSidebar';
import Content from '../components/Content ';
import { BarChartOutlined, UserOutlined } from '@ant-design/icons';

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState<{ label: string, icon: React.ReactNode }[]>([
    { label: '概览', icon: <UserOutlined /> },
    { label: '分析页', icon: <BarChartOutlined /> }
  ]);
  const [tabs, setTabs] = useState([{ label: '分析页', children: 'analysis Content', key: 'analysis' }]);
  const [activeTabKey, setActiveTabKey] = useState('analysis');

  const addTab = (label: string, children: string, key: string) => {
    setTabs([...tabs, { label, children, key }]);
    setActiveTabKey(key);
  };

  return (
    <Layout hasSider>
      <LeftSideBar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        setBreadcrumb={setBreadcrumb} 
        addTab={addTab} 
        setActiveKey={setActiveTabKey}
        tabs={tabs}
        activeTabKey={activeTabKey}
      />
      <Layout className={`${collapsed ? `ml-20` : `ml-[200px]`}`}>
        <Header background={colorBgContainer} breadcrumb={breadcrumb} />
        <Content 
          background={colorBgContainer} 
          tabs={tabs} 
          activeTabKey={activeTabKey} 
          setActiveTabKey={setActiveTabKey} 
          setTabs={setTabs}
        />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Home;