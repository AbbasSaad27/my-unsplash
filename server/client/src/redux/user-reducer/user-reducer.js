const userDefault = null;

const userReducer = (state = userDefault, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };
    case "DEL_USER":
      return null;
    default:
      return state;
  }
};

export default userReducer;
