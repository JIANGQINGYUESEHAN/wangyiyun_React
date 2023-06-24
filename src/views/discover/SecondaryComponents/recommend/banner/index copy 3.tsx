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




  function change(index: number) {
    let i = index;
    i++;
    if (i > banners.length - 1) {
      i = 0;
    }
    const left =
      i - 1 < 0 ? banners[banners.length - 1]?.imageUrl : banners[i - 1]?.imageUrl;
    const middle = banners[i]?.imageUrl;
    const right =
      i + 1 > banners.length - 1
        ? banners[0]?.imageUrl
        : banners[i + 1]?.imageUrl;





    return { right, left, middle };
  }


  return <BannersWrapper>
    <div className='main'>
      <ul className='ul'>
        <li className="list">
          <img src={change(index).left} className="imag" alt="" />
        </li>
        <li className="list">
          <img src={change(index).middle} className="imag" alt="" />
        </li>
        <li className="list">
          <img src={change(index).right} className="imag" alt="" />
        </li>
        <li className="list">
          <img src={change(index).right} className="imag" alt="" />
        </li>
      </ul>
    </div>

  </BannersWrapper>;
}


export default memo(Banner);
