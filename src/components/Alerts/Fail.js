import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";

import { hideErrorModal } from "../../store/slices/alerts";

const Fail = (props) => {
  const alertsState = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  return alertsState.showError ? (
    <Alert color="danger" toggle={() => dispatch(hideErrorModal())}>
      I am a global danger alert and I can be dismissed!
    </Alert>
  ) : undefined;
};

export default Fail;
