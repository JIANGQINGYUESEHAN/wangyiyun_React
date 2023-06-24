import React, { memo, useState } from 'react';
import type { FC, ReactNode } from 'react';
import HeaderWrapper from './styled';
import header from '@/assets/data/header_titles.json';
import { Link, NavLink } from 'react-router-dom';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import other from '@/assets/data/other.json';
interface IProps {
  children?: ReactNode;
}

const Header: FC<IProps> = () => {
  //标题选中
  let [Index, setIndex] = useState(0);
  //头像显示
  let [otherShow, setShow] = useState(false);
  function getIndex(index: number) {
    setIndex(index);
  }
  function Show(item: any, index: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          className={Index === index ? 'Active Link' : 'Link'}
          onClick={() => getIndex(index)}
          to={item.link}
        >
          {item.title}
          <div className={Index === index ? 'triangle' : ''}></div>
        </NavLink>
      );
    } else {
      return (
        <a className="Link" href={item.link}>
          {item.title}
        </a>
      );
    }
  }

  /* 有小 bug */
  function OtherShow(type: string) {
    if (type === 'over') {
      setShow(true);
    }
    if (type === 'leave') {

    }
    if (type === 'Leave') {
      setShow(false)
    }
  }
  function ShowOther(item: any, index: any) {
    if (item.type === 'path') {
      return (
        <NavLink className="listOther" to={item.link}>
          {item.title}
        </NavLink>
      );
    } else {
      return (
        <a className="listOther" href={item.link}>
          {item.title}
        </a>
      );
    }
  }

  return (
    <HeaderWrapper>
      <div className="content">
        <div className="left"></div>
        <div className="middle">
          {header.map((item, index) => {
            return (
              <div className="title" key={index}>
                {Show(item, index)}
              </div>
            );
          })}
        </div>
        <div className="right">
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="development_center">
            {' '}
            <a href="#" className="center_a">
              创作者中心
            </a>
          </div>
          {/* 头像 */}
          <div className="avatar" onMouseOver={() => OtherShow("over")} onMouseLeave={() => OtherShow("leave")} >
            {' '}
            <img
              className="avatar_imag"
              src="https://p4.music.126.net/EpuNWkFU1C-C9fUe4vNp0g==/109951167864687136.jpg?param=30y30"
              alt=""
            />
          </div>
        </div>
      </div>
      {otherShow && (
        <div className="other" onMouseOver={() => OtherShow("over")} onMouseLeave={() => OtherShow("Leave")}>
          <ul className="ul">
            {other.map((item, index) => {
              return (
                <li className="list" key={index}>
                  {ShowOther(item, index)}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className='diver'></div>
    </HeaderWrapper>
  );
};

export default memo(Header);
