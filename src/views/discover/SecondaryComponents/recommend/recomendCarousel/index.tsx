import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import RecommendCarouselWrapper from './styled'
import Areaheader from '@/components/areaheader/areaheader'
import Carousel from '@/components/Carousel'
import { WYYDispatch, WYYUserSelector } from '../../../../../store/index';
import { fetchRecommendAlbum } from '@/store/module/recommend'

interface IProps {
  children?: ReactNode
}

const RecommendCarousel: FC<IProps> = () => {
  let dispatch = WYYDispatch()
  useEffect(() => {
    dispatch(fetchRecommendAlbum())
  }, [])

  let { newAlbums } = WYYUserSelector((state) => {
    return {
      newAlbums: state.recommend.newAlbums
    }
  })



  return <RecommendCarouselWrapper>
    <Areaheader title='新碟上架' router='/discover/album/' />
    <Carousel newAlbums={newAlbums} />

  </RecommendCarouselWrapper>
}

export default memo(RecommendCarousel)
