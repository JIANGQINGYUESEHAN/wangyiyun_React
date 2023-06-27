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
      banners: state.recommend.banners
    };
  });

  // 图片
  const [image, setImage] = useState<any[]>([]);
  useEffect(() => {
    setImage([...banners]);
  }, [banners]);
  console.log(image);
  const [time, setTime] = useState<any>(null);
  const [isShow, setIsShow] = useState(false);
  const [isFade, setIsFade] = useState(true);
  const intervalTime = 2000;
  //定时器

  return <BannersWrapper>

    <div>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>

      <div>
        <button>Left</button>
        <button>Right</button>
      </div>
    </div>
  </BannersWrapper>;
};

export default memo(Banner);
