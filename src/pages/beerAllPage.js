import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { fetchBeerList } from "../recoils/beer/BeerRecoil";
import Pagination from "../components/pagination/Pagination";
import BeerPageList from "../components/beerPageList/BeerPageList";

const BeerAllPage = () => {
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageBeerList, setPerPageBeerList] = useState([]);
  const getBeerList = useRecoilValue(fetchBeerList);
  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;
  const totalPage = getBeerList.length;

  useEffect(() => {
    setPerPageBeerList(getBeerList.slice(firstPage, lastPage));
  }, []);

  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPerPageBeerList(getBeerList.slice(firstPage, lastPage));
  };

  const currentBeerList = (beerArr) => {
    let currentShow = 0;
    currentShow = beerArr.slice(firstPage, lastPage);
    return currentShow;
  };

  return (
    <React.Fragment>
      <BeerPageList list={currentBeerList(getBeerList)} />
      <Pagination
        perPage={perPage}
        totalPage={totalPage}
        onClick={handlePage}
      />
    </React.Fragment>
  );
};

export default BeerAllPage;
