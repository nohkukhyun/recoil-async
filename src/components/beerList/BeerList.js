import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { fetchBeerList } from "../../recoils/beer/BeerRecoil";
import BeerInfo from "../beerInfo/BeerInfo";
import { Suspense } from "react";

const BeerList = () => {
  const getBeerList = useRecoilValue(fetchBeerList);
  const history = useHistory();

  const goBeerInfoPage = (id) => {
    history.push(`/beerinfo/${id}`);
  };

  return (
    <BeerListWrap>
      <BeerListContent>
        {getBeerList?.map((data, idx) => {
          return (
            <BeerListItem key={`beeritem-${idx}`}>
              <Link to={`/beerinfo/${data.id}`}>
                <span>{data.name}</span>
              </Link>
            </BeerListItem>
          );
        })}
      </BeerListContent>
    </BeerListWrap>
  );
};

export default BeerList;

const BeerListWrap = styled.div`
  border: 1px solid #666;
  border-radius: 10px;
  width: 150px;
`;

const BeerListContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BeerListItem = styled.li`
  padding: 10px;
`;
