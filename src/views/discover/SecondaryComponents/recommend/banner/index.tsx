import { WYYDispatch, WYYUserSelector } from '@/store';
import { fetchBannerDataAction } from '@/store/module/recommend';
import React, { memo, useEffect, useState, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import BannersWrapper from './styled';

interface IProps {
  children?: ReactNode;
}

const Banner: FC<IProps> = () => {
  const dispatch = WYYDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);

  const { banners } = WYYUserSelector((state) => {
    return {
      banners: state.recommend.banners
    };
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeRef = useRef<any>(null);
  const [image, setImage] = useState<any[]>([]);

  useEffect(() => {
    let str = banners[0];
    let Image = [...banners];
    Image.push(str);
    setImage([...Image]);
  }, [banners]);

  function startFun() {
    timeRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + 1;
        if (nextIndex === image.length) {
          nextIndex = 1;
        }
        return nextIndex;
      });
    }, 3000);
  }

  useEffect(() => {
    startFun();
    return () => {
      clearInterval(timeRef.current);
    };
  }, [image.length]);

  return (
    <BannersWrapper>
      <div className='content'>
        <ul className='ul'>
          {image.map((item, index) => (
            <li
              className='list'
              key={index}
              style={currentIndex === 1 ? {
                transform: `translateX(-400px)`,
                // 设置动画的持续时间
              } : {
                transform: `translateX(${(-400 * (currentIndex))}px)`,
                transition: 'transform 3s ease' // 设置动画的持续时间
              }}
            >
              <img src={item?.imageUrl} key={index} alt="" className='image' />
            </li>
          ))}
        </ul>
      </div>
    </BannersWrapper>
  );
}

export default memo(Banner);
