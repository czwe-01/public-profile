import { createSlice } from "@reduxjs/toolkit";
import initialState from "../data/initialState.json";

const appSlice = createSlice({
  name: "personal-data",
  initialState: { data: initialState, darkMode: false, project: {} },
  reducers: {
    toggleMode: (state) => {
      console.log(state.darkMode);
      state.darkMode = !state.darkMode;
    },
    setProject: (state, action) => {
      state.project = action.payload;
    },
    resetProject: (state) => {
      state.project = {};
    },
  },
});

export const { toggleMode, setProject, resetProject } = appSlice.actions;
export default appSlice.reducer;
