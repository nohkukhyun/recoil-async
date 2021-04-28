import React from "react";

const BeerPageList = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((data, idx) => {
          return (
            <li key={`data-${idx}`}>
              <p>name : {data.name}</p>
              <p>country : {data.country}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BeerPageList;
