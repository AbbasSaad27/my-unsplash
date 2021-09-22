import { combineReducers } from "redux";
import deleteImg from "./deleteImg-reducer/deleteImg-reducer";
import modalReducer from "./modal-reducer/modal-reducer";
import searchReducer from "./search-reducer/search-reducer";
import userReducer from "./user-reducer/user-reducer";

export default combineReducers({
  modal: modalReducer,
  user: userReducer,
  searchTxt: searchReducer,
  deleteImg: deleteImg,
});
