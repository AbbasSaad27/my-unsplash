const INIT_STATE = "";

const searchReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CHANGE":
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
