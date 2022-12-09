const inputReducer = (state = "Jamie", action) => {
  if(action.type === "TEST") {
    state = action.payload;
  }
  return state;
}

const trelliesReducer = (state = [], action) => {
  if(action.type === "TRELLIES") {
    state = action.payload;
  }
  return state; 
}

const rootReducer = (state = {}, action) => {
  return {
    input: inputReducer(state.input, action),
    trellies: trelliesReducer(state.trellies, action),
  };
} 
 
export default rootReducer;