import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import eventReducer from './eventReducer';

const store = createStore(
  eventReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
