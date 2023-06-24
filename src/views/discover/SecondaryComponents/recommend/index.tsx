import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import RecommendWrapper from './styled'
import { fetchBannerDataAction } from '@/store/module/recommend'
import { WYYDispatch } from '@/store'
import Banner from './banner'


interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {

  return <RecommendWrapper>
    {/* 轮播图 */}
    <Banner />


  </RecommendWrapper>
}

export default memo(Recommend)

