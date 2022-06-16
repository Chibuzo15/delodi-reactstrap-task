import logo from "./logo.svg";
import "./App.css";

import store from "./store";
import { Provider } from "react-redux";

import RootRouter from "./Routes";

import { HashRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <RootRouter />
      </HashRouter>
    </Provider>
  );
}

export default App;
