import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  filterBeerList,
  beerFilterState,
  fetchGithubInfo,
  fetchBeerList,
  beerObjState,
  fetchBeerObject,
} from "../../recoils/beer/BeerRecoil";

const BeersWrapper = styled.div`
  position: relative;
`;

const BeersListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BeersListItem = styled.li`
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Beers = () => {
  const [beerFilter, setBeerfilter] = useRecoilState(beerFilterState);
  const [beerInfo, setBeerInfo] = useRecoilState(beerObjState);
  const filterBeerListState = useRecoilValue(filterBeerList);
  const githubInfo = useRecoilValue(fetchGithubInfo);
  const beerFetchList = useRecoilValue(fetchBeerList);
  const beerFetchObj = useRecoilValue(fetchBeerObject);

  const handleBeerfilter = (country) => {
    setBeerfilter(country);
  };

  const onSwitchList = () => {
    let newList = [];
    if (beerFetchList.length > 0 && filterBeerListState.length < 0)
      newList = beerFetchList;
    else if (filterBeerListState.length > 0) newList = filterBeerListState;
    return newList;
  };

  const onClickBeer = (id) => {
    setBeerInfo(id);
  };

  return (
    <BeersWrapper>
      <ButtonWrapper>
        <button onClick={() => handleBeerfilter("kr")}>한국</button>
        <button onClick={() => handleBeerfilter("ger")}>독일</button>
        <button onClick={() => handleBeerfilter("etc")}>기타</button>
        <button onClick={() => handleBeerfilter("")}>전체</button>
      </ButtonWrapper>
      <BeersListWrapper>
        {onSwitchList()?.map((data, idx) => {
          return (
            <BeersListItem
              key={`beer-${idx}`}
              onClick={() => onClickBeer(data.id)}
            >
              {data.name}
            </BeersListItem>
          );
        })}
      </BeersListWrapper>

      <BeersWrapper>
        <h5>{"맥주 정보"}</h5>
        <p>
          {Object.keys(beerFetchObj)?.map((data, idx) => {
            return (
              <>
                <span>{`${data}: ${beerFetchObj[data]}`}</span>
                <br />
              </>
            );
          })}
        </p>
      </BeersWrapper>

      <BeersWrapper>
        <h5>{"깃헙 정보"}</h5>
        <p>
          {Object.keys(githubInfo)?.map((data, idx) => {
            return (
              <>
                <span>{`${data}: ${githubInfo[data]}`}</span>
                <br />
              </>
            );
          })}
        </p>
      </BeersWrapper>
    </BeersWrapper>
  );
};

export default Beers;
