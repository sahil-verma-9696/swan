import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./appSlice/index";
import feedReducer from "./feedSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    feed: feedReducer,
  },
});
