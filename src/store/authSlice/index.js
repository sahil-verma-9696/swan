import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchInstance from "../../utility/fetchInstance";
import toast from "react-hot-toast";

export const me = createAsyncThunk("auth/me", async (_, thunkAPI) => {
  try {
    const res = await fetchInstance("/auth/me");
    return res;
  } catch (err) {
    console.error("Error in /auth/me:", err.message);
    return thunkAPI.rejectWithValue(err.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    loading: false,
    error: null,
    toastId: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(me.pending, (state) => {
        state.loading = true;
        state.error = null;
        // Store the toast ID
        state.toastId = toast.loading("Fetching user info...");
      })
      .addCase(me.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.info;
        // Dismiss loading toast
        toast.dismiss(state.toastId);
        toast.success("User loaded successfully!");
      })
      .addCase(me.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        toast.dismiss(state.toastId);
        toast.error(state.error || "Failed to load user");
      });
  },
});

export default authSlice.reducer;
