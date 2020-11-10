export const initialState = {
  userInfo: {
    user: null,
    userToken: null,
  },
  countdownInfo: {
    selectedDate: {},
    title: ""
  },
}

export const actionTypes = {
  SET_USER: "SET_USER",
  //SET_TOKEN: "SET_TOKEN",
  SET_INFO: "SET_INFO",
  //SET_DATE: "SET_DATE",
  //SET_TITLE: "SET_TITLE"
};

const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        userToken: action.userToken,
      };
    //case actionTypes.SET_TOKEN:
    //  return {
    //    ...state,
    //    userToken: action.userToken,
    //  };
    case actionTypes.SET_INFO:
      return {
        ...state,
        selectedDate: action.countdownInfo.selectedDate,
        title: action.countdownInfo.title
      };
    default:
      return state;
  }
};

export default reducer;