import "./App.css";
import { RecoilRoot } from "recoil";
import Beers from "./components/beers/Beers";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Suspense fallback={<div>{"Loading..."}</div>}>
          <Beers />
        </Suspense>
      </div>
    </RecoilRoot>
  );
}

export default App;
