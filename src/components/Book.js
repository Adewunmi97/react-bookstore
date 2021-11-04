import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookProgress from './BookProgress';
import deleteBook from '../redux/books/delete/deleteBookReducer';
import './Books.css';

function Book({
  title, category, id, progress,
}) {
  const [message, setMessage] = useState(' ');

  const handleDeleteBook = async () => {
    const data = await deleteBook(id);
    setMessage(data);
  };

  return (
    <>
      <p>{ message && message }</p>
      <div className="book-list">
        <div className="book-info">
          <div>
            <p className="book-category">{category}</p>
            <h4 className="book-title">{title}</h4>
            <p className="book-author">Book Author: Not Set</p>
            <div className="book-atr">
              <p>Comments |</p>
              <button className="btn-primary" id={id} type="button" onClick={() => handleDeleteBook(id)}>
                Remove
              </button>
              <p> | Edit</p>
            </div>
          </div>
          <div className="progress">
            <BookProgress progress={progress} />
          </div>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: BookProgress.propTypes.progress.isRequired,
};

export default Book;
