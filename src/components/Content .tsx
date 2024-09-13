import React from 'react';
import { Layout } from 'antd';

const { Content: AntContent } = Layout;

const Content: React.FC<{ background: string }> = ({ background }) => {
  return (
    <AntContent className={`mt-6 mb-0 mx-4`}>
      <div
        style={{
          padding: 24,
          textAlign: 'center',
          background,
          borderRadius: '8px', // 可以使用 Tailwind CSS 类
        }}
      >
        <p>long content</p>
        {
          // indicates very long content
          Array.from({ length: 100 }, (_, index) => (
            <React.Fragment key={index}>
              {index % 20 === 0 && index ? 'more' : '...'}
              <br />
            </React.Fragment>
          ))
        }
      </div>
    </AntContent>
  );
};

export default Content;
