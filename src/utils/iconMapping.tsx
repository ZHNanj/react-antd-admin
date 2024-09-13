import React from 'react';
import {
  UserOutlined,
  BarChartOutlined,
  AppstoreOutlined,
  VideoCameraOutlined,
  FileTextOutlined,
  ProjectOutlined,
  InfoCircleOutlined,
  GithubOutlined,
} from '@ant-design/icons';

export const iconMap: { [key: string]: React.ReactNode } = {
  overview: <UserOutlined />,
  analysis: <BarChartOutlined />,
  workspace: <AppstoreOutlined />,
  demo: <VideoCameraOutlined />,
  'antd-react': <FileTextOutlined />,
  project: <ProjectOutlined />,
  about: <InfoCircleOutlined />,
  documentation: <FileTextOutlined />,
  github: <GithubOutlined />,
};