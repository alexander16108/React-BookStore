import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import AddBook from './addBooks';
import Categories from './Categories';
import BookList from './BookList';

const Bookstore = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/">
        <BookList />
        <AddBook />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Routes>
  </Router>
);

export default Bookstore;
