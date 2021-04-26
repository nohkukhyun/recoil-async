import React, { useState, useCallback, Suspense } from "react";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  filterBeerList,
  beerFilterState,
  fetchGithubInfo,
  fetchBeerList,
  getBeerInfo,
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

const BeersComponent = () => {
  const [beerFilter, setBeerfilter] = useRecoilState(beerFilterState);
  const filterBeer = useRecoilValue(filterBeerList);
  const githubInfo = useRecoilValue(fetchGithubInfo);
  const beerFetchList = useRecoilValue(fetchBeerList);
  const [beerNumber, setBeerNumber] = useState(1);
  const getBeerInfos = useRecoilValue(getBeerInfo(beerNumber));

  const handleBeerfilter = (country) => {
    setBeerfilter(country);
  };

  const onSwitchList = () => {
    let newList = [];
    if (beerFetchList.length > 0 && filterBeer.length < 0)
      newList = beerFetchList;
    else if (filterBeer.length > 0) newList = filterBeer;
    return newList;
  };

  const onClickBeer = useCallback((id) => {
    setBeerNumber(id);
  }, []);

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
        <div>
          {Object.keys(getBeerInfos)?.map((data, idx) => {
            return (
              <div key={`beer-${idx}`}>
                <span>{`${data}: ${getBeerInfos[data]}`}</span>
                <br />
              </div>
            );
          })}
        </div>
      </BeersWrapper>

      {/* <BeersWrapper>
        <h5>{"깃헙 정보"}</h5>
        <div>
          {Object.keys(githubInfo)?.map((data, idx) => {
            return (
              <div key={`data-${idx}`}>
                <span>{`${data}: ${githubInfo[data]}`}</span>
                <br />
              </div>
            );
          })}
        </div>
      </BeersWrapper> */}
    </BeersWrapper>
  );
};

const Beers = () => {
  return (
    <Suspense fallback={<div>{"Loading..."}</div>}>
      <BeersComponent />
    </Suspense>
  );
};

export default Beers;
