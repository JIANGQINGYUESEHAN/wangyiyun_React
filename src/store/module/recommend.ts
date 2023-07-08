import { getBanners, getRecommendBody } from '@/service/static/recommend';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
  }
)

export const fetchRecommendBody = createAsyncThunk('hotrecommend', async (arg, { dispatch }) => {

  const res = await getRecommendBody(8);
  // console.log(res.result);

  dispatch(changeHotRecommendsAction(res.result))


})


interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
}


const Recommend = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changeHotRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
    }
  }
});
export const { changeBannersAction, changeHotRecommendsAction } = Recommend.actions;
export default Recommend.reducer;
