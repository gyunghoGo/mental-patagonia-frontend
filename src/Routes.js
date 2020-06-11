import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Products from "./Pages/Products/Products";
import ProductsDetailPage from "./Pages/Products/ProductsDetailPage/ProductsDetailPage";
import SignIn from "./Pages/SignIn/SignIn";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/detail" component={ProductsDetailPage} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
