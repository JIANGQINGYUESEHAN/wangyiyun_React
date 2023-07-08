import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AreaHeaderWrapper from './styled'
import { Link, useNavigate } from 'react-router-dom'
import { SmallDashOutlined } from '@ant-design/icons'


interface IProps {
  children?: ReactNode,
  title?: string
  keyWords?: Array<string>,
  skipRoutes?: string
}

const AreaHeader: FC<IProps> = (props) => {
  let { title, keyWords, skipRoutes } = props
  const navigate = useNavigate();

  function skipDiscover(item: string) {

    //进行拼接路由
    let routes = skipRoutes + `?cat=${item}`
    //进行路由跳转
    navigate(routes)

  }

  return < AreaHeaderWrapper>
    <div className='content'>
      <div className="dot">
        <div className='big'>
          <div className="small"></div>
        </div>
        <div className="rec">
          <span className='sp'>{title}</span>
        </div>

      </div>
      <div className='keyword'>
        {
          keyWords?.map((item, index) => {
            return (
              <div className="item" key={item} onClick={() => skipDiscover(item)}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })
        }
        <div className='more item'>
          <Link className=" item" to={skipRoutes!}>
            <span className="link">更多</span>
          </Link>
        </div>

      </div>

    </div>


  </ AreaHeaderWrapper>
}

export default memo(AreaHeader)
