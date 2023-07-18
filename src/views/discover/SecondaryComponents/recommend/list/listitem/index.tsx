import React, { memo } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import ListItemWrapper from './styled'
import { ImageSize } from '@/utils/Tool'
import { useRef } from 'react';
import { useState } from 'react';
import { FolderAddOutlined, PlayCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from '@/components/footer';

interface IProps {
  children?: ReactNode
  item: any
}

const ListItem: FC<IProps> = (props) => {

  let [isShow, setShow] = useState(false)
  let [isShow1, setShow1] = useState(false)
  let [Index, setIndex] = useState(0)
  let navigate = useNavigate()
  function Show() {
    setShow(!isShow)

  }
  function MouseShow(idx: number) {

    setIndex(idx)
    setShow1(true)
  }
  function MouseLeave() {
    setShow1(false)
  }
  function shipRanking() {
    navigate(`/discover/rank?id=${item.id}`)
  }
  let { item } = props
  return <ListItemWrapper> <div className='content'>

    <div className='top'>
      <div className='image_item'>
        <img src={ImageSize(item.coverImgUrl, 80)} alt="" className='image' />
      </div>
      <div className='div_span'>
        <div className='Span1'>
          <span>{item.name}</span>
        </div>

        <div className="icon">
          <div className='bacImage' ></div>
          <div className={isShow ? 'bacImage2' : 'bacImage1'} onClick={Show}></div>

        </div>

      </div>
    </div>
    <div className='ranking'>
      <ul>
        {
          item.tracks.slice(0, 8).map((itm: any, idx: any) => {
            return (
              <li key={idx} className={(idx + 1) % 2 == 0 ? 'single list' : 'even list'} onMouseOver={() => MouseShow(idx)} onMouseLeave={() => MouseLeave()}>
                <div className='sequence'>
                  <span className='idx'>{idx + 1}</span>
                </div>
                <div className='Name' style={idx == Index ? {
                  width: '110px'
                } : {}}>
                  <span className='NameSpan'>{itm.name}</span>
                </div>
                {isShow1 && idx == Index && <div className='btn'>
                  <div className='play'>
                    <PlayCircleOutlined />
                  </div>
                  <div className='add'>
                    <PlusOutlined />
                  </div>
                  <div className='file'>
                    <FolderAddOutlined />
                  </div>
                </div>}
              </li>
            )
          })
        }
        <li className='list'>
          <span className='more' onClick={() => shipRanking()}> 查看更多》</span>
        </li>
      </ul>

    </div>
  </div>
  </ListItemWrapper>
}

export default memo(ListItem)
