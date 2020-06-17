import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails/ProductsDetails";
import SignIn from "./Pages/SignIn/SignIn";
import Modal from "./Pages/Products/ProductDetails/Modal/Modal";
import HeaderFilterTop from "./Component/Header/HeaderTop/HeaderFilterTop";
import App from "./Component/Scroll/App"


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/details" component={ProductDetails} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/modal" component={Modal} />
          <Route exact path="/filtertop" component={HeaderFilterTop} />
          <Route exact path="/app" component={App} />

        </Switch>
      </Router>
    );
  }
}
export default Routes;
