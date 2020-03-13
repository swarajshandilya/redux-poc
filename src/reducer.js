const initialState = {
    count: 0
  };
const reducer = (state=initialState, action) =>{
    console.log('reducer', state, action);
    switch(action.type) {
        case 'INCREMENT':
          return {
            ...state,
            count: state.count + 1
          };
        case 'DECREMENT':
          return {
            count: state.count - 1
          };
        case 'RESET':
          return {
            count: 0
          };
        default:
          return state;
      }
}
 export default reducer;