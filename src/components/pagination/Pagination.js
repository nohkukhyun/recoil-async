import React from "react";

const Pagination = ({ totalPage, perPage, onClick }) => {
  const pageNumber = (() => {
    let pageNumArr = [];
    for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
      pageNumArr.push(i);
    }
    return pageNumArr;
  })();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {pageNumber.map((pNum) => (
        <span
          style={{ margin: "0 10px", cursor: "pointer" }}
          onClick={() => onClick(pNum)}
        >
          {pNum}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
