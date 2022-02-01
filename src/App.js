import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './components/Home/Home';
import Checkout from './components/checkout/checkout';

function App() {
  return (
    <Router>
      <div className="App">
       <Switch>
         <Route path="/checkout">
           <Header />
           <Checkout />
         </Route>
         <Router path="/login">
            <h1>Login page</h1>
         </Router>
         <Route path="/">
           <Header />
           <Home />
         </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
