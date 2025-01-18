// src/redux/reducers/counterReducer.js
const initialState = {};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERDETAILS":
      return {
        ...state,
        user: action.payload,
      };
    case "USERLOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
