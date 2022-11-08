// import { combineReducers } from 'redux';
import todoReducer from '../reducers/todoReducer';
// import iceReducer from '../reducers/iceReducer';

// import {combineReducers, legacy_createStore} from 'redux';
import { combineReducers, legacy_createStore } from 'redux';

// const rootReducer = combineReducers({
//   cakeData: cakeReducer,
//   iceData: iceReducer,
// });
const rootReducer = combineReducers({
  todoReducer,
 
});

const store = legacy_createStore(rootReducer);
// const store = legacy_createStore(cakeReducer);
export default store;