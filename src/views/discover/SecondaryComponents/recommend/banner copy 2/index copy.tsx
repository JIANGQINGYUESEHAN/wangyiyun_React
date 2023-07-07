import { WYYDispatch, WYYUserSelector } from '@/store';
import { fetchBannerDataAction } from '@/store/module/recommend';
import React, { memo, useEffect, useState, useRef } from 'react';
import type { FC, MutableRefObject, ReactNode } from 'react';
import BannersWrapper from './styled';

import $ from 'jquery';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
interface IProps {
  children?: ReactNode;
}

const Banner: FC<IProps> = () => {
  const [image, setImage] = useState<any[]>([]);
  const dispatch = WYYDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);

  const { banners } = WYYUserSelector((state) => {
    return {
      banners: state.recommend.banners
    };
  });

  useEffect(() => {
    let Image = [...banners];

    setImage([...Image]);
  }, [banners]);

  //左点击
  function left() {
    //获取最后一个元素
    let Image = [...image];
    let last = Image.splice(image.length - 1, 1);
    console.log(...last);
    Image.unshift(...last);
    setImage([...Image]);
  }

  function right() {
    //获取第一个
    let Image = [...image];
    let first = Image.splice(0, 1);
    //加到最后一个
    Image.push(...first);
    setImage([...Image]);
  }
  return (
    <BannersWrapper>
      <div className="content">
        <ul className="ul">
          {image.map((item, index) => {
            return (
              <li className={index === 3 ? 'list activee' : 'list'} key={index}>
                <img
                  src={item?.imageUrl}
                  alt=""
                  key={index}
                  className="image"
                />
              </li>
            );
          })}
        </ul>
        <ul className='dotUl'>
          {image.map((item, index) => {
            return <li className="dot"></li>;
          })}
        </ul>

        <div className="arrow arrow_left" onClick={() => left()}>
          <LeftOutlined />
        </div>
        <div className="arrow arrow_right" onClick={() => right()}>
          <RightOutlined />
        </div>
      </div>
    </BannersWrapper>
  );
};

export default memo(Banner);
