// src/components/BookItem.jsx
import React from 'react';

const BookItem = ({ book, index, updateBookStatus, deleteBook }) => {
  const handleChangeStatus = (e) => {
    updateBookStatus(index, e.target.value);
  };

  return (
    <li>
      <span>{book.title} by {book.author}</span>
      <select value={book.status} onChange={handleChangeStatus}>
        <option value="Want to Read">Want to Read</option>
        <option value="Reading">Reading</option>
        <option value="Finished">Finished</option>
      </select>
      <button onClick={() => deleteBook(index)}>Delete</button>
    </li>
  );
};

export default BookItem;
