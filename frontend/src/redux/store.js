import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import rootReducer from './reducers'; 
import { loadState, saveState } from '../utils/localStorageUtils';

const preloadedState = loadState(); // Your initial state
console.log("helloredux",preloadedState)
const store = createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk) 
);

store.subscribe(() => {
    saveState(store.getState());
});



export default store;