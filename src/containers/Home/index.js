import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  showSuccessModal,
  showErrorModal,
  showInfoModal,
  showWarningModal,
} from "../../store/slices/alerts";

const HomePage = () => {
  const dispatch = useDispatch();

  const renderButtons = () => {
    return (
      <div>
        <h3>Below are global alerts</h3>
        <button onClick={() => dispatch(showInfoModal())}>Show Info</button>
        <button onClick={() => dispatch(showSuccessModal())}>
          {" "}
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
      <h1>This is the Home page</h1>
      {renderButtons()}
      <button>
        <Link to="/other">Go To Next Page </Link>
      </button>
    </div>
  );
};

export default HomePage;
