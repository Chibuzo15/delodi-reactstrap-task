import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "./slices/alerts";

export default configureStore({
  reducer: {
    alert: alertReducer,
  },
});
