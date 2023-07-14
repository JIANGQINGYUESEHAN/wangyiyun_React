import { getBanners, getNewAlbum, getPlaylistDetail, getRecommendBody } from '@/service/static/recommend';
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

export const fetchRecommendAlbum = createAsyncThunk('album', async (arg, { dispatch }) => {
  let res = await getNewAlbum()

  dispatch(changeNewAlbumAction(res.albums))

})

//榜单
let promise: Promise<any>[] = []
const ids = [19723756, 3779629, 2884035]
export const fetchTopList = createAsyncThunk('toplist', async (args, { dispatch }) => {
  // for (let i of ids) {
  //   promise.push(getPlaylistDetail(i))
  // }

  // await Promise.all(promise).then((res) => {
  //   let ranking: any[] = []



  //   ranking = res.filter((item) => item.playlist)
  //     .map((item) => item.playlist)
  //   dispatch(changeTopListAction(ranking))

  // })
  const promises: Promise<any>[] = []
  for (const id of ids) {
    promises.push(getPlaylistDetail(id))
  }

  Promise.all(promises).then((res) => {
    const playlists = res
      .filter((item) => item.playlist)
      .map((item) => item.playlist)
    dispatch(changeTopListAction(playlists))
  })






})


interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  ranking: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  ranking: []
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
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeTopListAction(state, { payload }) {
      state.ranking = payload
    }
  }
});
export const { changeBannersAction, changeHotRecommendsAction, changeNewAlbumAction, changeTopListAction } = Recommend.actions;
export default Recommend.reducer;
