import React, { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import CarouselWrapper from './styled';
import { ImageSize } from '@/utils/Tool';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
  newAlbums: Array<Object>;
}

const CarouseL: FC<IProps> = (props) => {
  const navigater = useNavigate()
  let { newAlbums } = props;

  const pageSize = 4; // 每个滑块显示的数据个数
  const totalPages = Math.ceil(newAlbums.length / pageSize); // 总页数
  const [activeIndex, setActiveIndex] = useState(0);
  //显示的数据
  function GetShow() {
    const start = activeIndex * pageSize;
    const end = start + pageSize;
    return newAlbums.slice(start, end);
  }


  function left() {

    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    console.log(activeIndex);
  }

  function right() {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    console.log(activeIndex);
  }


  function skipArtist(id: number) {
    navigater(`/artist?id=${id}`)

  }
  function skipAlbum(id: number) {
    console.log(id);
    navigater(`/album?id=${id}`)

  }
  return (
    <CarouselWrapper>
      <div className="carousel">
        <div className="left arrow" onClick={() => left()}>
          <LeftOutlined />
        </div>
        <div className="inner "
        >
          {[1, 2, 3, 1].map((item, index) => (
            <div
              className={index === activeIndex ? "carousel-item active" : "carousel-item"}

              key={index}
            >
              {
                GetShow().map((item, index) => {
                  return <li key={index} className='list'>

                    <div className='Item'>
                      <img src={ImageSize((item as any)?.blurPicUrl, 100)} alt="" />
                      <div className='span'>
                        <div className='top'>
                          <span className='top_span' onClick={() => skipAlbum((item as any)?.id)}>{(item as any)?.name}</span>
                        </div>
                        <div className='bottom'>
                          <span className='top_span' onClick={() => skipArtist((item as any)?.artist.id)}>{(item as any)?.artist.name}</span>
                        </div>
                      </div>
                    </div>

                  </li>
                })
              }
            </div>
          ))}


        </div>
        <div className="right arrow" onClick={() => right()}>
          <RightOutlined />
        </div>
      </div>
    </CarouselWrapper>
  );
};


export default memo(CarouseL);
