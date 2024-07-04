// src/components/BookForm.jsx
import React, { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author, status: 'Want to Read' });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Book Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
