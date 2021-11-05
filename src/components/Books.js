/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { postBookRequest } from '../redux/books/post/bookReducer';
import { fetchBooks } from '../redux/books/get/getBooksReducer';
import Book from './Book';
import './Books.css';

function Books() {
  const dispatch = useDispatch();
  const booksData = useSelector(({ booksData }) => booksData.books);
  const [title, setTitle] = useState(' ');
  const [author, setAuthor] = useState(' ');
  const [category, setCategory] = useState(' ');
  const [errorMessage, setErrorMessage] = useState(' ');

  useEffect(() => {
    (async () => {
      await dispatch(fetchBooks());
    })();
  }, []);

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(
        postBookRequest({
          id: uuidv4(),
          title,
          author,
          category,
        }),
      );
      setTitle('');
      setAuthor('');
      setCategory('');
    } else {
      setErrorMessage('Please fill all fields');
    }
  };

  return (
    <div className="container wrapper-div">
      <div>
        {booksData.length < 1 ? (
          <p>No books found, please add some...</p>
        ) : (
          booksData
          && booksData.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              author={faker.name.firstName()}
              category={book.category}
            />
          ))
        )}
      </div>
      <div className="myform">
        <div>
          <h3 className="add-book-title">ADD NEW BOOK</h3>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </div>
        <div className="flex-container ">
          <div className="flex-item title-field">
            <input
              className="input title-input"
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex-item category-field">
            <select
              className="category"
              name="category"
              value={category}
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category:</option>
              <option value="action">Action</option>
              <option value="science fiction">Science Fiction</option>
              <option value="politics">Politics</option>
            </select>
          </div>
          <div className="flex-item add-button">
            <button className="primary-button-big submit" type="submit" onClick={submitBookToStore}>
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
