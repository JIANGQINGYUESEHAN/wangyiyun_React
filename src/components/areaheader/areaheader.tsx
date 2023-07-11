import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AreaHeaderWrapper from './styled'
import { Link, useNavigate } from 'react-router-dom'
import { SmallDashOutlined } from '@ant-design/icons'



interface IProps {
  children?: ReactNode,
  title?: string
  keyWords?: Array<string>,
  skipRoutes?: string;
  router: string
}

const AreaHeader: FC<IProps> = (props) => {
  let { title, keyWords, skipRoutes, router } = props
  const navigate = useNavigate();

  function skipDiscover(item: string) {

    if (title == "热门推荐") {
      //进行拼接路由
      let routes = skipRoutes + `?cat=${item}`
      //进行路由跳转
      navigate(routes)
    }


  }

  function AreaSkip() {
    navigate("/discover/playlist/")

    // /discover/album/
  }
  const lastIndex = keyWords && keyWords.length - 1 || 0
  return < AreaHeaderWrapper>
    <div className='content'>
      <div className="dot">
        <div className='big'>
          <div className="small"></div>
        </div>
        <div className="rec">
          <span className='sp' onClick={() => AreaSkip()}>{title}</span>
        </div>

      </div>
      {keyWords && <div className='keyword'>
        {
          keyWords.map((item, index) => {
            return (
              <div className="item" key={item} onClick={() => skipDiscover(item)}>
                <span className="link">{item}</span>
                {index !== lastIndex && <span className="divider">|</span>}
              </div>
            )
          })
        }
        <div className='more'>
          <Link className=" item" to={skipRoutes!}>
            <span className="link">更多</span>
          </Link>
        </div>

      </div>}

    </div>


  </ AreaHeaderWrapper>
}

export default memo(AreaHeader)
