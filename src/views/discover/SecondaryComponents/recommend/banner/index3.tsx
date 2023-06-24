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
  useEffect(() => {
    let time = setInterval(() => {
      interval(banners.length);
    }, 3000);
    return () => {
      clearInterval(time);
    };
  }, []);

  let num = Turn(banners);

  function interval(length: number) {
    num++;


    if (num >= length) {
      num = 0;
    }
    // console.log(num);

    setIndex(num);

  }
  let a = Turn(banners);

  function change(index: any, length: any) {
    let i = index;


    const left =
      i - 1 < 0 ? banners[length - 1]?.imageUrl : banners[i - 1]?.imageUrl;
    const middle = banners[i]?.imageUrl;
    const right =
      i + 1 > banners.length - 1
        ? banners[0]?.imageUrl
        : banners[i + 1]?.imageUrl;
    console.log(left);
    console.log(i);

    return { right, left, middle };
  }

  useEffect(() => {
    // console.log(index);
  }, [index]);



  return <BannersWrapper>

    <ul className="ul">
      <li className="list1">
        <img src={change(index, banners.length).left} className="imag" alt="" />
      </li>
      <li className="list">
        <img src={change(index, banners.length).middle} className="imag" alt="" />
      </li>
      <li className="list1">
        <img src={change(index, banners.length).right} className="imag" alt="" />
      </li>
    </ul>
  </BannersWrapper>;
};

export default memo(Banner);
