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

export const addImage = (state) => {
  return {
    type: userTypes.ADD_IMAGE,
    payload: state,
  };
};

export const delImage = (state) => {
  return {
    type: userTypes.DEL_IMAGE,
    payload: state,
  };
};
