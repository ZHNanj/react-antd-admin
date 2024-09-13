import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </AntFooter>
  );
};

export default Footer;
