import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftSideBar from '../components/LeftSidebar';
import Content from '../components/Content ';

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState<string[]>(['Home']); // 初始化面包屑

  return (
    <Layout hasSider>
      <LeftSideBar collapsed={collapsed} setCollapsed={setCollapsed} setBreadcrumb={setBreadcrumb} />
      <Layout className={`${collapsed ? `ml-20` : `ml-[200px]`}`}>
        <Header background={colorBgContainer} breadcrumb={breadcrumb} />
        <Content background={colorBgContainer} />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Home;