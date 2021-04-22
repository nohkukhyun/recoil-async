import React, { Suspense, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  filterBeerList,
  beerListState,
  beerFilterState,
  fetchGithubInfo,
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
  const [beerList, setBeerList] = useRecoilState(beerListState);
  const [beerFilter, setBeerfilter] = useRecoilState(beerFilterState);
  const filterBeerListState = useRecoilValue(filterBeerList);
  const githubInfo = useRecoilValue(fetchGithubInfo);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:5000/beers")
        .then((res) => setBeerList(res.data));
    }, 1000);
  }, []);

  const handleBeerfilter = (country) => {
    setBeerfilter(country);
  };

  const onSwitchList = () => {
    let newList = [];
    if (beerList.length > 0 && filterBeerListState.length < 0)
      newList = beerList;
    else if (filterBeerListState.length > 0) newList = filterBeerListState;
    return newList;
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
          return <BeersListItem key={`beer-${idx}`}>{data.name}</BeersListItem>;
        })}
      </BeersListWrapper>
      <BeersWrapper>
        <h5>{"깃헙 정보"}</h5>
        <Suspense fallback={"loading"}>
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
        </Suspense>
      </BeersWrapper>
    </BeersWrapper>
  );
};

export default Beers;
