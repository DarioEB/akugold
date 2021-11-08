import React from 'react';
// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
// eslint-disable-next-line
import { Provider } from 'react-redux';
// eslint-disable-next-line
import store from './store';
// Components - Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
function App() {
  return (
    <Router>
        
      {/* <Provider store={store}> */}
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/products"} component={Products} /> 
          <Route exact path={"/product"} component={Product} />
        </Switch>
        <Footer />
      {/* </Provider> */}
    </Router>
  );
}

export default App;
