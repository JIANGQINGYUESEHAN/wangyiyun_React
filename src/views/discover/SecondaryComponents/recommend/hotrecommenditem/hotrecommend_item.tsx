import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HotRecommendItemWrapper from './styled'
import { CountShow, ImageSize } from '@/utils/Tool'
import { PlayCircleOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode,
  picUrl: string,
  playCount: number


}

const HotRecommendItem: FC<IProps> = (props) => {



  let { picUrl, playCount } = props


  return <HotRecommendItemWrapper>
    <div className='Div_Image'>
      <img src={ImageSize(picUrl, 140)} alt="" className='Image' />
    </div>
    <div className='icon'>
      <div className='shadow'></div>
      <div className='headset'></div>
      <div className='count'>
        <span className='playCount'>{CountShow(playCount)}</span>
      </div>
      <div className='play'><PlayCircleOutlined className='Outlined' /></div>


    </div>



  </HotRecommendItemWrapper>
}

export default memo(HotRecommendItem)
