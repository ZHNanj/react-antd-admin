import React from 'react';
import { Breadcrumb, Layout } from 'antd';

const { Header: AntHeader } = Layout;

const Header: React.FC<{ background: string, breadcrumb: { label: string, icon: React.ReactNode }[] }> = ({ background, breadcrumb }) => {
    return (
        <AntHeader style={{ background }} className='p-4'>
            <Breadcrumb>
                {breadcrumb.map((item, index) => (
                    <Breadcrumb.Item key={index}>
                        {item.icon} {/* 显示图标 */}
                        {item.label}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </AntHeader>
    );
};

export default Header;
