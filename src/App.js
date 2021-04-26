import "./App.css";
import { RecoilRoot } from "recoil";
import Beers from "./components/beers/Beers";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Beers />
      </div>
    </RecoilRoot>
  );
}

export default App;
