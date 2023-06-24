import { WYYDispatch, WYYUserSelector } from '@/store';
import { fetchBannerDataAction } from '@/store/module/recommend';
import React, { memo, useEffect, useState } from 'react';
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
      banners: state.recommend.banners,
    };
  });

  function Turn(banners: Array<any>) {
    let i: any;
    // 长度为奇数
    if (banners.length % 2 === 1) {
      i = Math.floor(banners.length / 2) + 1;
    }
    // 长度为偶数
    if (banners.length % 2 === 0) {
      i = banners.length / 2;
    }
    return i;
  }

  let [index, setIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      return;
    }

    let time = setInterval(() => {
      interval(banners.length);
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [initialized]);

  let num = Turn(banners);

  function interval(length: number) {
    num++;


    if (num >= length) {
      num = 0;
    }

    setIndex(num);

  }


  return <BannersWrapper>
    <div className='main'>
      <ul className='ul'>
        {banners.map((item, inx) => {
          return <li key={inx} className='list'>
            <img src={item?.imageUrl} alt="" key={inx} className='image' />
          </li>
        })}
      </ul>
    </div>

  </BannersWrapper>;
};

export default memo(Banner);
