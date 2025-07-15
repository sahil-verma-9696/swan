import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    RightSidePannel: "all",
  },
  reducers: {
    setRightSidePannel: (state, action) => {
      state.RightSidePannel = action.payload;
    },
  },
});

export const { setRightSidePannel } = appSlice.actions;
export default appSlice.reducer;
