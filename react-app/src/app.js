import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute ,hashHistory, browserHistory} from "react-router"; 

import {About} from "./about";
import {ProductList} from "./product/product-list";
import {ProductEdit} from "./product/product-edit";

import Contact from "./contact";
import Home, {Layout} from "./layout";

class App extends React.Component {
 
 constructor(props) {
   super(props);

   this.showContact = true;
 }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout} >
          <IndexRoute component={Home}/>
          <Route path = "/products" component={ProductList}/>
          <Route path = "/products/edit/:id" component={ProductEdit}/>
          <Route path = "/about" component={About}/>
          <Route path = "/contact" component={Contact}/>
        </Route>
 
      </Router>
    )
  }
}

render(<App />, document.getElementById("root"));
