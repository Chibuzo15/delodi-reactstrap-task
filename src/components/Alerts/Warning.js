import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";

import { hideWarningModal } from "../../store/slices/alerts";

const Warning = (props) => {
  const alertsState = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  return (
    <Alert
      isOpen={alertsState.showWarning}
      color="warning"
      toggle={() => dispatch(hideWarningModal())}
    >
      I am a global alert and I can be dismissed!
    </Alert>
  );
};

export default Warning;
