import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import addBookReducer from './books/post/bookReducer';
import getBooksReducer from './books/get/getBooksReducer';

const reducer = combineReducers({
  addBookReducer,
  booksData: getBooksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
