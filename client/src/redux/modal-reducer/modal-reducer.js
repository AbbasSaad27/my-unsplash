const modalDefault = false;

const modalReducer = (state = modalDefault, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return true;
    case "CLOSE_MODAL":
      return false;
    default:
      return modalDefault;
  }
};

export default modalReducer;
