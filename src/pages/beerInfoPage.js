import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled";
import BeerList from "../components/beerList/BeerList";
import BeerInfo from "../components/beerInfo/BeerInfo";
import SubRoutes from "../routes/subRoutes";

const beerInfoPage = (props) => {
  return (
    <BeerListPageWrap>
      <BeerList />
      <SubRoutes />
    </BeerListPageWrap>
  );
};

export default beerInfoPage;

const BeerListPageWrap = styled.div`
  display: flex;
`;
