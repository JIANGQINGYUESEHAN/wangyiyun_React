import { WYYDispatch, WYYUserSelector } from '@/store';
import { fetchBannerDataAction } from '@/store/module/recommend';
import React, { memo, useEffect, useState, useRef } from 'react';
import type { FC, MutableRefObject, ReactNode } from 'react';
import BannersWrapper from './styled';

import $ from 'jquery';
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
  const bannerRef = useRef<any>(null);
  const [image, setImage] = useState<any[]>([]);
  const interval = 2000;
  //定时器
  const timeRef = useRef<any>(null);

  // function startfun() {
  //   currentIndexRef.current = (currentIndexRef.current + 1) % image.length;
  //   const currentIndex = currentIndexRef.current;

  //   let len = image.length;
  //   let _n = currentIndex;

  //   if (currentIndex == len - 1) {

  //     bannerRef!.current!.style.left = '-500px';
  //     currentIndexRef.current = 1

  //   }

  //   if (_n < 0) {
  //     if (bannerRef.current) {
  //       bannerRef.current.style.left = `-${currentIndex * 500}px`;
  //     }
  //   }
  //   if (currentIndex !== 0) {
  //     bannerRef!.current!.style.left = `-${currentIndex * 500}px`;
  //     bannerRef!.current!.style.transition = `left 1s ease`;
  //   }
  // }
  function startfun(n: number) {
    var len = image.length;//4
    var _n = currentIndexRef.current + n;
    if (_n === len + 1) {
      bannerRef!.current!.css({
        left: 0
      });
      _n = 1;
    }
    if (_n < 0) {
      bannerRef!.current!.css({
        left: -3200
      });
      _n = len - 1;
    }

    console.log(_n);

    bannerRef!.current!.animate({
      left: -800 * _n
    }, 1000);
  }


  console.log(currentIndexRef.current);

  function autoPlay() {
    clearInterval(timeRef.current);
    timeRef.current = setInterval((item, index) => {
      startfun(1);
    }, interval);
  }

  //开启定时器
  useEffect(() => {
    var $bannerInner = $<any>(".banners");
    bannerRef!.current = $bannerInner[0] as HTMLDivElement;
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
        <div className="banners" >
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
