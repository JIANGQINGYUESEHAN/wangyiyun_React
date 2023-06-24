import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import DiscoverWrapper from './styled';
import { discoverMenu } from '@/assets/data/local-data'
interface IProps {
  children?: ReactNode;
}


const Discover: FC<IProps> = () => {
  return (
    <DiscoverWrapper>
      <div className='discover'>
        {discoverMenu.map((item, index) => {
          return <NavLink key={index} className="Link" to={item.link}>{item.title}</NavLink>
        })}
      </div>
      <div>
        <Outlet />
      </div>

    </DiscoverWrapper>

  );
};

export default memo(Discover);
