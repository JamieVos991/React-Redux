function reducers(state, action) {
  if (typeof state  === "undefined"){
     state = "Jamie";
     return state;
  }
  return state;
}

export default reducers