import { Layout, Menu } from "antd";
import { FC, useState } from "react";
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
import React from "react";

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));

  const { Sider } = Layout;
  
interface IProps {
  collapsed: boolean,
  setCollapsed: (collapsed: boolean) => void
}

const LeftSideBar: FC<IProps> = ({ collapsed, setCollapsed }) => {
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className='fixed overflow-auto h-screen inset-y-0 left-0 scrollbar-thin scrollbar-thumb-gray-300'>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} inlineCollapsed={collapsed} />
      </Sider>
    )
}

export default LeftSideBar;