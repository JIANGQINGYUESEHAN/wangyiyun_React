import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import HeaderWrapper from './styled'
import header from '@/assets/data/header_titles.json'
import { Link, NavLink } from 'react-router-dom'
import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import other from '@/assets/data/other.json'
interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {

  let [Index, setIndex] = useState(0)
  function getIndex(index: number) {
    setIndex(index)
  }
  function Show(item: any, index: any) {
    if (item.type === 'path') {
      return <NavLink className={Index === index ? 'Active Link' : 'Link'} onClick={() => getIndex(index)} to={item.link}>{item.title}
        <div className={Index === index ? 'triangle' : ''}></div>
      </NavLink>
    } else {
      return <a className='Link' href={item.link}>{item.title}</a>
    }
  }
  function ShowOther(item: any, index: any) {
    if (item.type === 'path') {
      return <NavLink to={item.link}>{item.title}</NavLink>
    } else {
      return <a href={item.link}>{item.title}</a>
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
        <div className='right'>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className='development_center'> <a href="#" className='center_a'>创作者中心</a></div>
          {/* 头像 */}
          <div className='avatar'> <img className='avatar_imag' src="https://p4.music.126.net/EpuNWkFU1C-C9fUe4vNp0g==/109951167864687136.jpg?param=30y30" alt="" /></div>
        </div>

      </div>
      <div className='other'>
        <ul>
          {other.map((item, index) => {
            return (
              <li key={index}>{ShowOther(item, index)}</li>
            )
          })}
        </ul>
      </div>
    </HeaderWrapper>
  )

}

export default memo(Header)
