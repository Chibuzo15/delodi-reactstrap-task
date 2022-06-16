import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  showSuccessModal,
  showErrorModal,
  showInfoModal,
  showWarningModal,
} from "../store/slices/alerts";

const Page = () => {
  const dispatch = useDispatch();

  const renderButtons = () => {
    return (
      <div>
        <h3>Below are global alerts</h3>
        <button onClick={() => dispatch(showInfoModal())}>Show Info</button>
        <button onClick={() => dispatch(showSuccessModal())}>
          Show Success
        </button>
        <button onClick={() => dispatch(showErrorModal())}>Show Error</button>
        <button onClick={() => dispatch(showWarningModal())}>
          Show Warning
        </button>
      </div>
    );
  };
  return (
    <div>
      <button>
        <Link to="/">Go Home </Link>
      </button>
      <h1>This is the other page</h1>
      {renderButtons()}
    </div>
  );
};

export default Page;
