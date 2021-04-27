import React, { useEffect } from "react";
import { Suspense } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import BeerInfo from "../components/beerInfo/BeerInfo";
import beerInfoPage from "../pages/beerInfoPage";
import beerListPage from "../pages/beerListPage";
import { getBeerInfo } from "../recoils/beer/BeerRecoil";

const SubRoutes = (props) => {
  return (
    <Switch>
      <Route path={`/beerinfo/:id`} component={BeerInfo} />
    </Switch>
  );
};

export default withRouter(SubRoutes);
