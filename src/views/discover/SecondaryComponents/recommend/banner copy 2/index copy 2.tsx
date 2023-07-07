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
    setCurrentIndex(currentIndex === image.length - 1 ? 0 : currentIndex + 1)

  }

  function left() {
    setCurrentIndex(currentIndex === 0 ? image.length - 1 : currentIndex - 1)
  }




  return (
    <BannersWrapper>
      <div className="content">
        <div className='slider'>

          {image.map((slide, index) => {
            return (
              <div
                className={index === currentIndex ? 'slide active' : 'slide'}
                key={index}
              >
                {index === currentIndex && (
                  <img src={slide?.imageUrl} alt='' className='image' />
                )}
              </div>
            );
          })}

        </div>
      </div>


    </BannersWrapper>
  );
};

export default memo(Banner);
