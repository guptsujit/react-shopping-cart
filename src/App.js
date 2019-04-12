import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Menubar from './components/Menubar';
import Mycart from './components/Mycart';
import Wishlist from './components/Wishlist';
import Checkout from './components/Checkout';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route path="/mycart" component={Mycart} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
