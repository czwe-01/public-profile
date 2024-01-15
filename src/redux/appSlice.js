import { createSlice } from "@reduxjs/toolkit";
import initialState from "../data/initialState.json";

const appSlice = createSlice({
  name: "personal-data",
  initialState: { data: initialState, darkMode: false, project: {} },
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleMode } = appSlice.actions;
export default appSlice.reducer;
