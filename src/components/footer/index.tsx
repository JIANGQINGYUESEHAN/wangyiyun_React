import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import FooterStyledWrapper from './styled'

interface IProps {
  children?: ReactNode
}

const Footer: FC<IProps> = () => {
  return <FooterStyledWrapper>
    <div className='content'>
      <ul>

      </ul>
    </div>
  </FooterStyledWrapper>
}

export default memo(Footer)
