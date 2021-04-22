import axios from "axios";
import { atom, selector } from "recoil";

export const beerListState = atom({
  key: "beerListState",
  default: [],
});

export const beerFilterState = atom({
  key: "beerFilterState",
  default: "",
});

export const filterBeerList = selector({
  key: "filterBeerList",
  get: ({ get }) => {
    const filter = get(beerFilterState);
    const list = get(beerListState);

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

export const fetchGithubInfo = selector({
  key: "/github",
  get: async () => {
    const rs = await axios
      .get("https://api.github.com/users/nohkukhyun")
      .then((res) => res.data);
    return rs;
  },
});
