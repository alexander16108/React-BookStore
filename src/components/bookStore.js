import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './navbar';
import AddBook from './addBooks';
import Categories from './Categories';
import BookList from './bookList';
import store from '../redux/configureStore';

const Bookstore = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <BookList />
          <AddBook />
        </Route>
        <Route path="/categories" component={Categories} />
      </Switch>
    </Router>
  </Provider>
);

export default Bookstore;
