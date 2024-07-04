// src/App.js
import React, { useState } from 'react';
import BookForm from './Components/BookForm';
import BookList from './Components/BookList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const updateBookStatus = (index, status) => {
    const newBooks = [...books];
    newBooks[index].status = status;
    setBooks(newBooks);
  };

  const deleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  return (
    <div>
      <h1>Book Tracker</h1>
      <BookForm addBook={addBook} />
      <BookList 
        books={books} 
        updateBookStatus={updateBookStatus} 
        deleteBook={deleteBook} 
      />
    </div>
  );
};

export default App;
