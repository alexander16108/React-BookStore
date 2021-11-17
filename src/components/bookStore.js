import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './navbar';
import AddBook from './addBooks';
import Categories from './Categories';
import BookList from './bookList';

const Bookstore = () => (
  <Provider>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route exact path="/" element={<AddBook />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </Provider>
);

export default Bookstore;
