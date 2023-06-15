import * as actionTypes from './constant';
const initState = {
  num: 1
};
const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case actionTypes.FriendBaseConstant:
      return { ...state, num: state.num + action.num };

    default:
      break;
  }
};
export default reducer;
