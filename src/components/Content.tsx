import React from 'react';
import { Layout, Tabs } from 'antd';
import { useAppStore } from '../store/appStore';

const { Content: AntContent } = Layout;

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const Content: React.FC<{ background: string }> = ({ background }) => {
  const { tabs, activeTabKey, setActiveTabKey, setTabs } = useAppStore();

  const onChange = (key: string) => {
    setActiveTabKey(key);
  };

  const remove = (targetKey: TargetKey) => {
    const targetIndex = tabs.findIndex((pane) => pane.key === targetKey);
    const newPanes = tabs.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeTabKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveTabKey(key);
    }
    setTabs(newPanes);
  };

  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'remove') {
      remove(targetKey);
    }
  };

  return (
    <AntContent style={{ background }} className={`mt-6 mb-0 mx-4`}>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeTabKey}
        type="editable-card"
        onEdit={onEdit}
        items={tabs}
      />
    </AntContent>
  );
};

export default Content;