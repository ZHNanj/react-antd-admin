import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { useAppStore } from '../store/appStore';

const { Header: AntHeader } = Layout;

const Header: React.FC<{ background: string }> = ({ background }) => {
    const { breadcrumb } = useAppStore();
    const breadcrumbItems = breadcrumb.map((item, index) => ({
        key: index,
        title: <>
            {item.icon}
            <span>{item.label}</span>
        </>,
    }));
    return (
        <AntHeader style={{ background }} className='p-4'>
            <Breadcrumb items={breadcrumbItems} />
        </AntHeader>
    );
};

export default Header;
