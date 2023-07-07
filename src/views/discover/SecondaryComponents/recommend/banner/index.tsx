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
  const timeRef = useRef<any>(null);

  const { banners } = WYYUserSelector((state) => {
    return {
      banners: state.recommend.banners
    };
  });

  useEffect(() => {
    let Image = [...banners];

    setImage([...Image]);
  }, [banners]);


  const [currentIndex, setCurrentIndex] = useState(0);

  //左点击
  function right() {
    console.log("right");

    setCurrentIndex(prevIndex => prevIndex === image.length - 1 ? 0 : prevIndex + 1);

  }

  function left() {
    setCurrentIndex(prevIndex => prevIndex === 0 ? image.length - 1 : prevIndex - 1);
  }

  function dotClick(index: number) {
    let diff = Math.max(currentIndex, index) - Math.min(currentIndex, index);

    const delay = 2000; // 每次状态更新的延迟时间，单位为毫秒
    const step = currentIndex < index ? 1 : -1; // 步长，用于确定是向左还是向右移动

    let i = 0;
    let currentIterationIndex = currentIndex; // 当前迭代索引
    const intervalId = setInterval(() => {
      if (i < diff) {
        i++;
        currentIterationIndex += step;
        setCurrentIndex(currentIterationIndex);
      } else {
        clearInterval(intervalId); // 清除定时器
      }
    }, delay);
  }

  //轮播
  useEffect(() => {
    startFun();
    return () => {
      clearInterval(timeRef.current);
    };
  }, [image.length]);

  function startFun() {
    timeRef.current = setInterval(() => {
      right()

    }, 5000);
  }


  function done() {
    clearInterval(timeRef.current)
  }
  return (
    <BannersWrapper>
      <div className="content">
        <div className="image_div" onMouseOver={() => done()} onMouseLeave={() => startFun()}>
          {image.map((slide, index) => {
            return (
              <div
                className={index === currentIndex ? 'slide active' : 'slide'}
                key={index}
              >
                {index === currentIndex && (
                  <img src={slide?.imageUrl} alt="" className="image" />
                )}
              </div>
            );
          })}
        </div>

        <ul className="dotUl">
          {image.map((item, index) => {
            return (
              <li
                className={index == currentIndex ? 'active dot' : 'dot'}
                key={index}
                onClick={() => dotClick(index)}
              ></li>
            );
          })}
        </ul>
      </div>
      <div className="arrow arrow_left" onClick={() => left()}>
        <LeftOutlined />
      </div>
      <div className="arrow arrow_right" onClick={() => right()}>
        <RightOutlined />
      </div>
    </BannersWrapper>
  );
};

export default memo(Banner);
