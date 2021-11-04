/* eslint-disable no-unused-vars */
import axios from 'axios';
import { BASE_URL, appID } from '../../utils';

const deleteBook = (itemID) => {
  axios.delete(`${BASE_URL}/${appID}/books/${itemID}`)
    .then((response) => {
      window.location.reload();
      return response;
    }).catch((error) => {
      // console.log(error.response.data);
    });
};

export default deleteBook;
