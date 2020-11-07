export const initialState = {
  countdownInfo: {
    selectedDate: {},
    title: ""
  }
}

export const actionTypes = {
  SET_INFO: "SET_INFO"
  //SET_DATE: "SET_DATE",
  //SET_TITLE: "SET_TITLE"
};

const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case actionTypes.SET_INFO:
      return {
        ...state,
        selectedDate: action.countdownInfo.selectedDate,
        title: action.countdownInfo.title
      };
    //case actionTypes.SET_TITLE:
    //  return {
    //    ...state,
    //    title: action.title,
    //  };
    default:
      return state;
  }
};

export default reducer;