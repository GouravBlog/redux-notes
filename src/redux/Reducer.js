const initialState = 0;

export  const reducer = (state=initialState,action)=>{
  switch (action.type) {
    case "ADD_TO_CART":
      return state+1;
    case "REMOVE_TO_CART":
      return state-1 ; 
     default:
      return state;
  }
}