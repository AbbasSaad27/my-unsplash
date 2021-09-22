import modalTypes from "./modal-types";

export const openModal = () => {
  return {
    type: modalTypes.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: modalTypes.CLOSE_MODAL,
  };
};

export const setForm = (state) => {
  return {
    type: modalTypes.SET_FORM,
    payload: state,
  };
};
