import { combineReducers } from "redux";

const inputReducer = (state, action) => {
  if (typeof state  === "undefined"){
     state = "Jamie";
     return state;
  }
  if(action.type === "TEST") {
    state = action.payload;
  }
  return state;
}

const trelliesReducer = (state, action) => {
  if(typeof state === "undefined") {
    state = [];
    return state;
  }
  if(action.type === "TRELLIES") {
    state = ["test"];
  }
  return state; 
}

export default combineReducers({
  input: inputReducer,
  trellies: trelliesReducer,
});