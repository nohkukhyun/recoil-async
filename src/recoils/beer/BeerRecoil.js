import axios from "axios";
import { atom, selector, selectorFamily } from "recoil";

export const fetchBeerList = selector({
  key: "beerListState",
  get: async () => {
    const rs = axios.get("http://localhost:5000/beers").then((res) => res.data);
    return rs;
  },
});

export const beerFilterState = atom({
  key: "beerFilterState",
  default: "",
});

export const filterBeerList = selector({
  key: "filterBeerList",
  get: ({ get }) => {
    const filter = get(beerFilterState);
    const list = get(fetchBeerList);

    switch (filter) {
      case "kr":
        return list.filter((data) => data.country === "kr");

      case "ger":
        return list.filter((data) => data.country === "ger");

      case "etc":
        return list.filter(
          (data) => data.country !== "kr" && data.country !== "ger"
        );

      default:
        return list;
    }
  },
});

/**
 * // 선택한 맥주 디폴트
      export const beerObjState = atom({
        key: "beerObjState",
        default: 1,
      });

      // 선택한 맥주 정보 가져오기
      export const fetchBeerObject = selector({
        get: async ({ get }) => {
          const idx = get(beerObjState);
          const rs = await axios
            .get(`http://localhost:5000/beers/${idx}`)
            .then((res) => res.data);
          return rs;
        },
      });
    ======================================

      선택한 맥주정보 가져오기 위에랑 동일한 코드
 */
export const getBeerInfo = selectorFamily({
  key: "getBeerInfoState",
  get: (idx) => async ({ get }) => {
    const rs = axios
      .get(`http://localhost:5000/beers/${idx ? idx : 1}`)
      .then((res) => res.data);
    return rs;
  },
});

// github 정보 가져오기
export const fetchGithubInfo = selector({
  key: "githubState",
  get: async () => {
    const rs = await axios
      .get("https://api.github.com/users/nohkukhyun")
      .then((res) => res.data);
    return rs;
  },
});
