import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  productReducer:productReducer,
  cartReducer:cartReducer,
  userReducer:userReducer
});

export default rootReducer;