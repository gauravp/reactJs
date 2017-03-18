import React from 'react';
import {render} from 'react-dom';

import {Router, Route,IndexRoute, hashHistory,browserHistory} from "react-router";
import {About} from "./about";

import {Contact} from "./contact";
import Home, {Layout} from "./layout";
import ProductList from "./product/product-list";
import ProductEdit from "./product/product-edit";
//import {Calc} from "./calc";
import  "./promise";
import "./calc";

import {math_reducer} from "./calc/reducers/math";
import {reducer} from "./calc/reducers/cart"
import Calculator from "./calc/components/calculators";
import productReducer from "./product/reducer";

import {createStore,applyMiddleware,combineReducers} from "redux";

import{logger} from "./calc/middleware";

import {reducer as formReducer } from "redux-form";

let initialState = 0;

let sum = window.localStorage.getItem("sum");
if(sum) initialState = parseInt(sum);


let rootReducer = combineReducers({
    math : math_reducer,
    shoppingCart: reducer,
    productState:productReducer,
    form:formReducer
})

//Store

let store = createStore(rootReducer,{ math : initialState },applyMiddleware(logger));

store.subscribe(() => {
        console.log("state value",store.getState())
        window.localStorage.setItem("sum",store.getState().math)
});



class App extends React.Component {
 
 constructor(props) {
   super(props);

   this.showContact = true;
 }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout} >
          <IndexRoute component={Home} />
          <Route path="/products" component={ProductList} />
          <Route path="/products/edit/:id" component={ProductEdit} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/calculator" component={Calculator}/>
         {/* <Route path="/calc" component={Calc} />*/}
        </Route>
      </Router>
    );
  }
}


import {Provider} from "react-redux";

render((
  <Provider store={store}>
  <App />
  </Provider>
  ), document.getElementById("root"));
