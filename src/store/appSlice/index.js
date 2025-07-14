import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    RightSidePannel: "all",
    LeftSidePannel: "Sidebar",
  },
  reducers: {
    setRightSidePannel: (state, action) => {
      state.RightSidePannel = action.payload;
    },
    setLeftSidePannel: (state, action) => {
      state.LeftSidePannel = action.payload;
    },
  },
});

export const { setRightSidePannel, setLeftSidePannel } = appSlice.actions;
export default appSlice.reducer;
