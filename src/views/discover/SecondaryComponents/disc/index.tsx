import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Disc: FC<IProps> = () => {
  return <div> Disc</div>;
};

export default memo(Disc);
