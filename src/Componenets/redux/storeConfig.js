import thunk from 'redux-thunk';
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import searchReducer from './search/reducer';

const rootReducer = combineReducers({
  searchReducer,
});
const initState = {};
const store = createStore(rootReducer, initState, applyMiddleware(thunk));
export default store;
