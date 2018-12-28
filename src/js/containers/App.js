import React from "react"

import Home from "./Home/Home"
import ProductDetails from "../components/ProductDetails/ProductDetails"
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact component={Home}/>
        <Route path="/product/:id" component={ProductDetails}/>
      </Switch>
    </div>
  );
};

export default App;