const useHandleChange = function (e) {
  const { name, value } = e.target;
  this.setState({ [name]: value });
};
export default useHandleChange;
