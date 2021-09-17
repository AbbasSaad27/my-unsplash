import { combineReducers } from "redux";
import modalReducer from "./modal-reducer/modal-reducer";
import userReducer from "./user-reducer/user-reducer";

export default combineReducers({
  modal: modalReducer,
  user: userReducer,
});
