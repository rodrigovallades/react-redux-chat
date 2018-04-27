import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import chats from './chat';

export default combineReducers({
  routing: routerReducer,
  chats
});
