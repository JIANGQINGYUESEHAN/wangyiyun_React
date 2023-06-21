import { configureStore } from '@reduxjs/toolkit';
import DiscoverReducer from './module/discover';

import {
  TypedUseSelectorHook,
  shallowEqual,
  useDispatch,
  useSelector
} from 'react-redux';
let store = configureStore({
  reducer: {
    discover: DiscoverReducer,

  }
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
//获取参数的类型
type GetStateType = typeof store.getState;
//通过参数类型 获得返回值类型
type StateReturnType = ReturnType<GetStateType>;

type Dispatch = typeof store.dispatch;

//将该返回值类型 直接定义成 userSelect的返回值类型
export const WYYUserSelector: TypedUseSelectorHook<StateReturnType> =
  useSelector;
export const WYYDispatch: () => Dispatch = useDispatch;
export const WYYShallowEqual = shallowEqual;
export default store;
