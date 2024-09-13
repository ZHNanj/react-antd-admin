import React from 'react';
import { Layout } from 'antd';
import TabsView from './TabsView';

const { Content: AntContent } = Layout;

const Content: React.FC<{ background: string }> = ({ background }) => {
  return (
    <AntContent style={{ background }} className={`mt-6 mb-0 mx-4`}>
      <TabsView />
    </AntContent>
  );
};

export default Content;