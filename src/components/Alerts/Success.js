import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";

import { hideSuccessModal } from "../../store/slices/alerts";

const Success = (props) => {
  const alertsState = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  return (
    <Alert
      isOpen={alertsState.showSuccess}
      color="success"
      toggle={() => dispatch(hideSuccessModal())}
    >
      I am a global alert and I can be dismissed!
    </Alert>
  );
};

export default Success;
