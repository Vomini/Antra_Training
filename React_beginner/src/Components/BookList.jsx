// src/components/BookList.jsx
import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, updateBookStatus, deleteBook }) => {
  return (
    <ul>
      {books.map((book, index) => (
        <BookItem 
          key={index} 
          index={index} 
          book={book} 
          updateBookStatus={updateBookStatus} 
          deleteBook={deleteBook} 
        />
      ))}
    </ul>
  );
};

export default BookList;
