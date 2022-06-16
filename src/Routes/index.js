import * as React from "react";

import { Route, Routes } from "react-router-dom";

import HomePage from "../containers/Home";
import OtherPage from "../containers/OtherPage";

const RootRouter = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </>
  );
};

export default RootRouter;
