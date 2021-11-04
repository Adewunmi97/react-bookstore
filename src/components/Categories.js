// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { fetchBooks } from '../redux/books/get/getBooksReducer';

// function Categories() {
//   const books = useSelector(({ books }) => books.books);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   return (
//     <div>
//       <h1>we win</h1>
//       {JSON.stringify(books)}
//     </div>
//   );
// }

// export default Categories;

import React from 'react';

const Categories = () => (
  <p className="we-win">we win!!!</p>
);

export default Categories;
