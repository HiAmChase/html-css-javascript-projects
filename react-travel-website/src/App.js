import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Product} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
