import React from "react";
import BeerInfo from "../components/beerInfo/BeerInfo";
import BeerList from "../components/beerList/BeerList";
import beerInfoPage from "./beerInfoPage";
import styled from "@emotion/styled";

const beerListPage = () => {
  return (
    <BeerListPageWrap>
      <BeerList />
      <BeerInfo />
    </BeerListPageWrap>
  );
};

export default beerListPage;

const BeerListPageWrap = styled.div`
  display: flex;
`;
