import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";

import { hideInfoModal } from "../../store/slices/alerts";

const Info = (props) => {
  const alertsState = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  return alertsState.showInfo ? (
    <Alert color="info" toggle={() => dispatch(hideInfoModal())}>
      I am a global alert and I can be dismissed!
    </Alert>
  ) : undefined;
};

export default Info;
