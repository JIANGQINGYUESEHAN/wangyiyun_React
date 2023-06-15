import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  return (
    <>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/rank">排行榜</Link>
        <Link to="/discover/playlist">歌单</Link>
        <Link to="/discover/radio">主播电台</Link>
        <Link to="/discover/singer">歌手</Link>
        <Link to="/discover/disc">新碟上架</Link>
      </div>
      <div>
        <Outlet />{' '}
      </div>
    </>
  );
};

export default memo(Discover);
