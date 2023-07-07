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

  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<any>(null);
  const [image, setImage] = useState<any[]>([]);
  const interval = 2000;
  //定时器
  const timeRef = useRef<any>(null);
  function startfun(n: number) {
    var len = image.length;//4
    var _n = currentIndex + n;
    if (_n === len) {
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
    setCurrentIndex(_n)


    bannerRef!.current!.animate({
      left: -800 * _n
    }, 1000);
  }




  function autoPlay() {
    clearInterval(timeRef.current);
    timeRef.current = setInterval((item, index) => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + 1;
        if (nextIndex === image.length) {
          nextIndex = 1;
        }
        return nextIndex;
      });
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
