import { createSlice } from "@reduxjs/toolkit";
import SettingsState from "@custom-types/states/SettingsState";

const initialState: SettingsState = {
  language: "ru",
  theme: 'default'
};

const settingsSlice = createSlice({
  name: "@@language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const settingsReducer = settingsSlice.reducer;
export const { setLanguage } = settingsSlice.actions;
