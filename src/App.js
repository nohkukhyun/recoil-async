import "./App.css";
import { RecoilRoot } from "recoil";
import Routes from "./routes/Routes";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </Suspense>
  );
}

export default App;
