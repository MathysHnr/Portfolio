import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../../pages/home";
import Error from "../../pages/error";
import Header from "../header/header";

function Router() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Router;
