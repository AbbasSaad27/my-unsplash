import { removeImg } from "./user.utils";

const userDefault = null;

const userReducer = (state = userDefault, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };
    case "DEL_USER":
      return null;
    case "ADD_IMAGE":
      return { ...state, images: [...state.images, action.payload] };
    case "DEL_IMAGE":
      return {
        ...state,
        images: removeImg(state.images, action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
