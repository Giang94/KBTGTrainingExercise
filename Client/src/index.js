import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import App from './containers/App';
import ProductDetail from './containers/ProductDetail'
import ShoppingCart from './containers/ShoppingCart';

const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    applyMiddleware(thunkMiddleware)
);
// Create an enhanced history that syncs navigation events with the store
const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, store)
render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/product/:searchParams" component={ProductDetail}/>
        <Route path="/shopping-cart" component={ShoppingCart}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
