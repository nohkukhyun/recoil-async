import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { getBeerInfo } from "../../recoils/beer/BeerRecoil";

const BeerInfo = (props) => {
  const {
    match: { params },
  } = props;
  const getBeerInfos = useRecoilValue(getBeerInfo(params?.id));

  return (
    <BeerInfoWrap>
      {Object.keys(getBeerInfos)?.length > 0 &&
        Object.keys(getBeerInfos)?.map((data, idx) => {
          return (
            <div key={`data-${idx}`}>
              <span>{`${data}: ${getBeerInfos[data]}`}</span>
              <br />
            </div>
          );
        })}
    </BeerInfoWrap>
  );
};

export default BeerInfo;

const BeerInfoWrap = styled.div`
  border: 1px solid #666;
  border-radius: 10px;
  width: 300px;
  padding: 10px;
`;
