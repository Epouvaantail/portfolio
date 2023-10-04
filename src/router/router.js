import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import Projects from "../pages/project/Projects.js";

const router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default router;