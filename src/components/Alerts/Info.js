import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";

import { hideInfoModal } from "../../store/slices/alerts";

const Info = (props) => {
  const alertsState = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let timer;
    if (alertsState.showInfo) {
      timer = setTimeout(() => {
        dispatch(hideInfoModal());
      }, 1000 * 2);
    } else {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [alertsState.showInfo]);

  return (
    <Alert isOpen={alertsState.showInfo} color="info">
      I am a global alert and I will dismiss automatically!
    </Alert>
  );
};

export default Info;
