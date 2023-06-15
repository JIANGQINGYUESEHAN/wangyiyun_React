import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Rank: FC<IProps> = () => {
  return <div> Rank</div>;
};

export default memo(Rank);
