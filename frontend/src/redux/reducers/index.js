import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  productReducer:productReducer,
  cartReducer:cartReducer
});

export default rootReducer;