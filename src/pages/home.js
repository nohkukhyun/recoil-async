import React from "react";
import BeerInfo from "../components/beerInfo/BeerInfo";
import BeerList from "../components/beerList/BeerList";
import beerInfoPage from "./beerInfoPage";
import styled from "@emotion/styled";

const home = () => {
  return (
    <BeerListPageWrap>
      <BeerList />
    </BeerListPageWrap>
  );
};

export default home;

const BeerListPageWrap = styled.div`
  display: flex;
`;
