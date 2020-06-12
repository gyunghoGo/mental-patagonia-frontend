import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails/ProductsDetails";
import SignIn from "./Pages/SignIn/SignIn";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/details" component={ProductDetails} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
