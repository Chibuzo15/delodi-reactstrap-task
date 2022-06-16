import logo from "./logo.svg";
import "./App.css";

import store from "./store";
import { Provider } from "react-redux";

import RootRouter from "./Routes";

import { HashRouter } from "react-router-dom";

import classes from "./app.module.css";

// alerts
import SuccessAlert from "./components/Alerts/Success";
import FailAlert from "./components/Alerts/Fail";
import WarnAlert from "./components/Alerts/Warning";
import InfoAlert from "./components/Alerts/Info";

function App() {
  return (
    <Provider store={store}>
      <div className={classes["alerts-wrapper"]}>
        <SuccessAlert />
        <FailAlert />
        <WarnAlert />
        <InfoAlert />
      </div>
      <HashRouter>
        <RootRouter />
      </HashRouter>
    </Provider>
  );
}

export default App;
