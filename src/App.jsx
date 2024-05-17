import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
}

export default App;
