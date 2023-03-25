const reducer = (state, action) => {
    const {name, value} = action;
    const newState = {
      ...state,
      [name]:value
    }
    return newState;
  }
  
  export default reducer;