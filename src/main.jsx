import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import Detailpage from "./Detailpage.jsx";
import Submitpage from "./Submitpage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detailpage />} />
        <Route path="/submit" element={<Submitpage />} />
      </Routes>
    </Router>
  </StrictMode>
);