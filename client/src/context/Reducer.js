export const initialState = {
  userInfo: {
    user: null,
    userToken: "",
    userName: "",
    userEmail: ""
  },
  countdownInfo: {
    //selectedDate: null,
    title: "",
    timerId: "",
    deleted: false
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
  console.log("state", state)
  //const { type, payload } = action;

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        userInfo: {
          user: action.userInfo.user,
          userToken: action.userInfo.userToken,
          userName: action.userInfo.userName,
          userEmail: action.userInfo.userEmail
        }
      };
    //case actionTypes.SET_TOKEN:
    //  return {
    //    ...state,
    //    userToken: action.userToken,
    //  };
    case actionTypes.SET_INFO:
      return {
        ...state,
        //selectedDate: action.countdownInfo.selectedDate,
        //title: action.countdownInfo.title
        countdownInfo: {
          title: action.countdownInfo.title,
          timerId: action.countdownInfo.timerId,
          deleted: action.countdownInfo.deleted
        }
      };
    default:
      return state;
  }
};

export default reducer;