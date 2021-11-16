import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import AddBook from './addBooks';
import Categories from './Categories';
import BookList from './bookList';

const Bookstore = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BookList />} />
      <Route exact path="/" element={<AddBook />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default Bookstore;
