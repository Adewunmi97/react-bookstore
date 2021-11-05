import getBooksTypes from './getBooksTypes';

export const getBooksRequest = () => ({
  type: getBooksTypes.GET_BOOKS_REQUEST,
});

export const getBooksSuccess = (books) => ({
  type: getBooksTypes.GET_BOOKS_SUCCESS,
  payload: books,
});

export const getBooksFailure = (error) => ({
  type: getBooksTypes.GET_BOOKS_FAILURE,
  payload: error,
});
