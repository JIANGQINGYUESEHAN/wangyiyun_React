import { getBanners } from '@/service/static/recommend';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction(res.banners))
  }
)


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
    }
  }
});
export const { changeBannersAction } = Recommend.actions;
export default Recommend.reducer;
