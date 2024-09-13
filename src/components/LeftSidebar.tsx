import { Layout, Menu } from "antd";
import { FC } from "react";
import {
    AppstoreOutlined,
    BarChartOutlined,
    FileTextOutlined,
    GithubOutlined,
    InfoCircleOutlined,
    ProjectOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React from "react";

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        key: 'overview',
        label: '概览',
        icon: <UserOutlined />,
        children: [
            { key: 'analysis', label: '分析页', icon: <BarChartOutlined /> },
            { key: 'workspace', label: '工作台', icon: <AppstoreOutlined /> },
        ],
    },
    {
        key: 'demo',
        label: '演示',
        icon: <VideoCameraOutlined />,
        children: [
            { key: 'antd-react', label: 'ant design react', icon: <FileTextOutlined /> },
        ],
    },
    {
        key: 'project',
        label: '项目',
        icon: <ProjectOutlined />,
        children: [
            { key: 'about', label: '关于', icon: <InfoCircleOutlined /> },
            { key: 'documentation', label: '文档', icon: <FileTextOutlined /> },
            { key: 'github', label: 'github', icon: <GithubOutlined /> },
        ],
    },
];

const { Sider } = Layout;

interface IProps {
    collapsed: boolean,
    setCollapsed: (collapsed: boolean) => void,
    setBreadcrumb: (breadcrumb: { label: string, icon: React.ReactNode }[]) => void,
    tabs: { label: string, children: string, key: string }[],
    addTab: (label: string, children: string, key: string) => void,
    setActiveKey: (key: string) => void,
}

const LeftSideBar: FC<IProps> = ({ collapsed, setCollapsed, setBreadcrumb, tabs, addTab, setActiveKey }) => {
    const handleMenuClick = (key: string) => {
        const selectedItem = items.flatMap(item => item.children ? item.children : []).find(item => item.key === key);
        const parentItem = items.find(item => item.children?.some(child => child.key === key));
        const breadcrumb = [
            // add parent item
            parentItem ? { label: parentItem.label, icon: parentItem.icon } : null, 
            selectedItem ? { label: selectedItem.label, icon: selectedItem.icon } : null
        ].filter(Boolean) as { label: string, icon: React.ReactNode }[];
        setBreadcrumb(breadcrumb);

        if (selectedItem) {
            const tab = tabs.find(tab => tab.key === selectedItem.key);
            if (tab) {
              setActiveKey(selectedItem.key);
            } else {
                addTab(selectedItem.label, `Content of ${selectedItem.label}`, selectedItem.key);
            }
        }
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className='fixed overflow-auto h-screen inset-y-0 left-0 scrollbar-thin scrollbar-thumb-gray-300'>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['overview']} items={items} inlineCollapsed={collapsed} onClick={({ key }) => handleMenuClick(key)} />
        </Sider>
    );
};

export default LeftSideBar;