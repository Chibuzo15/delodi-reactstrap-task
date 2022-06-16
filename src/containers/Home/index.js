import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  showSuccessModal,
  showErrorModal,
  showInfoModal,
  showWarningModal,
} from "../../store/slices/alerts";

import { UncontrolledAlert } from "reactstrap";

const HomePage = () => {
  const dispatch = useDispatch();

  const [showLocal, setShowLocal] = React.useState(false);

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

  const renderLocalAlerts = () => {
    return (
      <div>
        <h3>Below are local alerts</h3>
        <button onClick={() => setShowLocal(true)}>Show Local Alerts</button>
        {showLocal ? (
          <div>
            <UncontrolledAlert color="info">
              I am an local alert and I can be dismissed!
            </UncontrolledAlert>
            <UncontrolledAlert color="danger">
              I am an local alert and I can be dismissed!
            </UncontrolledAlert>
            <UncontrolledAlert color="warning">
              I am an local alert and I can be dismissed!
            </UncontrolledAlert>
          </div>
        ) : undefined}
      </div>
    );
  };

  return (
    <div>
      <h1>This is the Home page</h1>
      {renderButtons()}
      {renderLocalAlerts()}
      <button>
        <Link to="/other">Go To Next Page </Link>
      </button>
    </div>
  );
};

export default HomePage;
