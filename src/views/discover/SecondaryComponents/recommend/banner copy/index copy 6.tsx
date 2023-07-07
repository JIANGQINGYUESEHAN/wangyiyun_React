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

  const currentIndexRef = useRef(0);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [image, setImage] = useState<any[]>([]);
  const interval = 2000;
  const timeRef = useRef<any>(null);

  function startfun() {
    currentIndexRef.current = (currentIndexRef.current + 1) % image.length;
    const currentIndex = currentIndexRef.current;
    bannerRef!.current!.style.left = `-${currentIndex * 500}px`;
    bannerRef!.current!.style.transition = `left 1s ease`;
  }

  console.log(currentIndexRef.current);

  function autoPlay() {
    clearInterval(timeRef.current);
    timeRef.current = setInterval(() => {
      startfun();
    }, interval);
  }

  useEffect(() => {
    autoPlay();
  }, [image.length]);

  useEffect(() => {
    let str = banners[0];
    let Image = [...banners];
    Image.push(str);
    setImage([...Image]);
  }, [banners]);

  return (
    <BannersWrapper>
      <div className="content">
        <div className="banners" ref={bannerRef}>
          {image.map((item, index) => {
            return (
              <div key={index} className="list">
                <img
                  src={item?.imageUrl}
                  key={index}
                  alt=""
                  className="image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </BannersWrapper>
  );
};

export default memo(Banner);
