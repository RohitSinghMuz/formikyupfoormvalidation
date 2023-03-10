import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
