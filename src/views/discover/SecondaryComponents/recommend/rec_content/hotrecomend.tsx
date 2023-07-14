import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import RcContentWrapper from './styled'
import Areaheader from '@/components/areaheader/areaheader'
import { WYYDispatch, WYYUserSelector } from '@/store'
import { useEffect } from 'react';
import { fetchRecommendBody } from '@/store/module/recommend'
import HotRecommendItem from '../hotrecommenditem/hotrecommend_item'
import { Link } from 'react-router-dom'
import RecomendCarousel from '../recomendCarousel'
import List from '../list'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const dispatch = WYYDispatch()
  useEffect(() => {
    dispatch(fetchRecommendBody())
  }, [])
  let { hotRecommends } = WYYUserSelector((state) => {
    return {
      hotRecommends: state.recommend.hotRecommends
    }
  })


  return < RcContentWrapper>
    <div className="content">
      <div className='left'>
        <Areaheader
          title="热门推荐"
          keyWords={['华语', '流行', '摇滚', '民谣', '电子']}
          skipRoutes="/discover/playlist/"
          router='/discover/playlist/'
        />
        <div className='HotRecommendbody'>
          {
            hotRecommends.map((item, idx) => {
              return <div className='item_rec' key={idx}>
                <HotRecommendItem
                  picUrl={item!.picUrl}
                  playCount={item!.playCount}
                />
                <div className='content_bottom'>
                  <Link className='itemName' to={`/discover/playlist?id=${item!.id}`}>
                    <span className='Span'>{item!.name}</span>
                  </Link>
                </div>

              </div>
            })
          }
        </div>
        <RecomendCarousel />
        <Areaheader
          title="榜单"

          router='/discover/playlist/'
        />
        <List />
      </div>
      <div className='right'>
        right
      </div>
    </div>
  </RcContentWrapper>
}

export default memo(HotRecommend)
