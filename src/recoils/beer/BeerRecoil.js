import axios from "axios";
import { atom, selector } from "recoil";

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

export const beerObjState = atom({
  key: "beerObjState",
  default: 1,
});

export const fetchBeerObject = selector({
  get: async ({ get }) => {
    const idx = get(beerObjState);
    const rs = await axios
      .get(`http://localhost:5000/beers/${idx}`)
      .then((res) => res.data);
    return rs;
  },
});

export const fetchGithubInfo = selector({
  key: "/github",
  get: async () => {
    const rs = await axios
      .get("https://api.github.com/users/nohkukhyun")
      .then((res) => res.data);
    return rs;
  },
});
