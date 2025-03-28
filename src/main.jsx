import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import DetailPage from "./Detailpage.jsx";
import Submitpage from "./Submitpage.jsx";
import EditPage from "./Editpage.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<DetailPage />} />
        <Route path="/submit" element={<Submitpage />} />
        <Route path="/posts/:id/edit" element={<EditPage />} />
        
      </Routes>
    </Router>
  </StrictMode>
);