import { Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "./pages/Main";
import Continents from "./components/Continents";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Continents />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
