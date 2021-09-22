const modalDefault = { open: false, type: "upload" };

const modalReducer = (state = modalDefault, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, open: true };
    case "CLOSE_MODAL":
      return { ...state, open: false };
    case "SET_FORM":
      return { ...state, type: action.payload };
    default:
      return modalDefault;
  }
};

export default modalReducer;
