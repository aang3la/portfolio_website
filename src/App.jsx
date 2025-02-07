import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Portfolio } from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
