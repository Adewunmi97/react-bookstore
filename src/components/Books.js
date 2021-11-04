import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook, allBooks } from '../redux/books/books';
import Book from './Book';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector(allBooks);
  const [title, addTitle] = useState(' ');
  const [author, addAuthor] = useState(' ');

  const addBookTitle = (e) => {
    addTitle(e.target.value);
  };

  const addBookAuthor = (e) => {
    addAuthor(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, id: uuidv4() }));
    addTitle('');
    addAuthor('');
  };

  const removeBookFromStore = (e) => {
    dispatch(removeBook({ id: e.target.id }));
  };

  return (
    <div>
      <h4>ADD A NEW BOOK</h4>
      <div>
        <ul>
          { books && books.map((book) => (
            <Book
              title={book.title}
              author={book.author}
              id={book.id}
              key={book.id}
              removeBookFromStore={removeBookFromStore}
            />
          ))}
        </ul>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Title" onChange={addBookTitle} />
          <input type="text" placeholder="Author" onChange={addBookAuthor} />
          <button type="submit" onClick={submitBookToStore}>Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default Books;
