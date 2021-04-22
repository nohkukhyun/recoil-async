import "./App.css";
import { RecoilRoot } from "recoil";
import Beers from "./components/beers/Beers";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>{"Loading..."}</div>}>
        <div className="App">
          <Beers />
        </div>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
