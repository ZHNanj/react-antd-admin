import React from 'react';
import { Layout } from 'antd';

const { Header: AntHeader } = Layout;

const Header: React.FC<{ background: string }> = ({ background }) => {
  return (
    <AntHeader style={{ padding: 0, background }}>
      {/* 这里可以添加导航或其他内容 */}
    </AntHeader>
  );
};

export default Header;
