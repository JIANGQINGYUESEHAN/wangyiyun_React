import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import CarouselWrapper from './styled'

interface IProps {
  children?: ReactNode
}

const CarouseL: FC<IProps> = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  function left() {
    setActiveIndex((prevIndex) =>
      prevIndex === 4 - 1 ? 0 : prevIndex + 1
    );
  }

  function right() {
    setActiveIndex((prevIndex) =>
      prevIndex === 4 - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <CarouselWrapper>
      <div className="carousel">
        <div className="inner "
          style={
            {
              left: `(-${700 * activeIndex}px)`,
              transitionDuration: "2s",
            }
          }
        >
          {[1, 2, 3, 1].map((item, index) => (
            <div
              className={index === activeIndex ? "carousel-item active" : "carousel-item"}

              key={index}
            >
              {item}
            </div>
          ))}


        </div>
        <div className="arrow" onClick={left}>
          左箭头
        </div>
        <div className="arrow" onClick={right}>
          右箭头
        </div>
      </div>
    </CarouselWrapper>
  );
};

export default memo(CarouseL)

// {
//   GetShow().map((item, index) => {
//     return <li key={index} className='list'>

//       <div className='Item'>
//         <img src={ImageSize((item as any).blurPicUrl, 100)} alt="" />
//       </div>

//     </li>
//   })
// }

// {Array.from({ length: totalPages }, (_, index) => (
//   <li
//     key={index}
//     className={
//       index == activeIndex ? 'Item_list activea' : 'Item_list'
//     }
//   >
//     {index + 1 + '22222222222222222222222222'}
//   </li>
// ))}
