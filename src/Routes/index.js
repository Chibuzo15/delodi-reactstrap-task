import * as React from "react";
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";

import HomePage from "../containers/Home";
import OtherPage from "../containers/OtherPage";

import {
  showSuccessModal,
  showErrorModal,
  showInfoModal,
  showWarningModal,
} from "../store/slices/alerts";

const RootRouter = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // show all global alerts after 10 seconds
    setTimeout(() => {
      dispatch(showErrorModal());
      dispatch(showInfoModal());
      dispatch(showSuccessModal());
      dispatch(showWarningModal());
    }, 1000 * 10);
  }, []);

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
