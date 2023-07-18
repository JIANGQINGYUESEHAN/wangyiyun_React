import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import ListWrapper from './styled';
import { WYYDispatch, WYYShallowEqual, WYYUserSelector } from '@/store';
import { fetchTopList } from '@/store/module/recommend';
import ListItem from './listitem';

interface IProps {
  children?: ReactNode;
}


const List: FC<IProps> = () => {


  let dispatch = WYYDispatch()
  useEffect(() => {
    dispatch(fetchTopList())
  }, [])


  let { ranking = [] } = WYYUserSelector((state) => {
    return {
      ranking: state.recommend.ranking
    }
  }, WYYShallowEqual)



  return (
    <ListWrapper>

      <div className='content'>
        {
          ranking.map((item, index) => {
            return <div key={index} className='item'>
              <ListItem item={item} />
            </div>
          })
        }
      </div>
    </ListWrapper>
  );
};

export default memo(List);
