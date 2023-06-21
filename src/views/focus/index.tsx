import { Button } from 'antd';
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Focus: FC<IProps> = () => {
  return <div> Focus
    <Button type="primary">Primary Button</Button>
    <Button type="dashed">Dashed Button</Button>
  </div>;
};

export default memo(Focus);
