import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./appSlice/index";
import feedReducer from "./feedSlice";
import authReducer from "./authSlice/index";

export const store = configureStore({
  reducer: {
    app: appReducer,
    feed: feedReducer,
    auth: authReducer,
  },
});
