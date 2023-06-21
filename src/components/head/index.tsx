import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import HeaderWrapper from './styled'
import header from '@/assets/data/header_titles.json'
import { Link, NavLink } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {

  let [Index, setIndex] = useState(0)
  function getIndex(index: number) {
    console.log(index);
    setIndex(index)


  }
  function Show(item: any, index: any) {
    if (item.type === 'path') {
      return <NavLink className={Index === index ? 'active Link' : 'Link'} onClick={() => getIndex(index)} to={item.link}>{item.title}
        <div className={Index === index ? 'triangle' : ''}></div>
      </NavLink>
    } else {
      return <a className='Link' href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className='content'>
        <div className='left'></div>
        <div className='middle'>
          {
            header.map((item, index) => {
              return (
                <div className='title' key={index}>{Show(item, index)}</div>
              )
            })
          }
        </div>
        <div className='right'></div>
      </div>
    </HeaderWrapper>
  )

}

export default memo(Header)
