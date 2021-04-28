import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BeerAllPage from "../pages/beerAllPage";
import beerInfoPage from "../pages/beerInfoPage";
import beerListPage from "../pages/beerListPage";
import home from "../pages/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/beerlist" component={beerListPage} />
        <Route path="/beerinfo" component={beerInfoPage} />
        <Route path="/all" component={BeerAllPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
