import bookTypes from './bookTypes';

const bookActions = (() => {
  const addBookRequest = () => ({
    type: bookTypes.ADD_BOOK_REQUEST,
  });

  const addBookSuccess = (payload) => ({
    type: bookTypes.ADD_BOOK_SUCCESS,
    payload,
  });

  const addbookFailure = (payload) => ({
    type: bookTypes.ADD_BOOK_FAILURE,
    payload,
  });

  const removeBook = (payload) => ({
    type: bookTypes.REMOVE_BOOK,
    payload,
  });

  return {
    addBookRequest,
    addBookSuccess,
    addbookFailure,
    removeBook,
  };
})();

export default bookActions;
