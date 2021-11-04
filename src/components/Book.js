import React from 'react';
import PropTypes from 'prop-types';

function Book({
  title, author, id, removeBookFromStore,
}) {
  return (
    <li key={id}>
      <span>{title}</span>
      <span>{author}</span>
      <button id={id} type="button" onClick={removeBookFromStore}>Delete</button>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeBookFromStore: PropTypes.func.isRequired,
};

export default Book;
