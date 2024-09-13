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

  return (
    <Layout hasSider>
      <LeftSideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout className={`${collapsed ? `ml-20` : `ml-[200px]`}`}>
        <Header background={colorBgContainer} />
        <Content background={colorBgContainer} />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Home;