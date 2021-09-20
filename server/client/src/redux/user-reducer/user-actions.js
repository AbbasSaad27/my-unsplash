import userTypes from "./user-types";

export const setUser = (state) => {
  return {
    type: userTypes.SET_USER,
    payload: state,
  };
};

export const delUser = () => {
  return {
    type: userTypes.DEL_USER,
  };
};
