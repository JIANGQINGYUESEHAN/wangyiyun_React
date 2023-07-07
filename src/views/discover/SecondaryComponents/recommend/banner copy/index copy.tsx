import { WYYDispatch, WYYUserSelector } from '@/store';
import { fetchBannerDataAction } from '@/store/module/recommend';
import React, { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import BannersWrapper from './styled';

interface IProps {
  children?: ReactNode;
}

const Banner: FC<IProps> = () => {
  /** 发起action(获取数据) */
  const dispatch = WYYDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);

  const { banners } = WYYUserSelector((state) => {
    return {
      banners: state.recommend.banners
    };
  });

  const [currentImages, setCurrentImages] = useState({
    left: '',
    middle: '',
    right: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(change());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  let a = Turn(banners);

  function change() {
    let i = a;
    i++;
    if (i > banners.length - 1) {
      i = 0;
    }
    const left =
      i - 1 < 0 ? banners[i - 1]?.imageUrl : banners[i - 1]?.imageUrl;
    const middle = banners[i]?.imageUrl;
    const right =
      i + 1 > banners.length - 1
        ? banners[0]?.imageUrl
        : banners[i + 1]?.imageUrl;

    return { right, left, middle };
  }

  return (
    <BannersWrapper>
      <ul className="ul">
        <li className="list1">
          <img src={change().left} className="imag" alt="" />
        </li>
        <li className="list">
          <img src={change().middle} className="imag" alt="" />
        </li>
        <li className="list1">
          <img src={change().right} className="imag" alt="" />
        </li>
      </ul>
    </BannersWrapper>
  );
};

export default memo(Banner);
