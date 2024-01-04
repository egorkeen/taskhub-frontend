import { createSlice } from "@reduxjs/toolkit";
import LanguageState from "@custom-types/LanguageState";

const initialState: LanguageState = {
  language: "ru",
};

const languageSlice = createSlice({
  name: "@@language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const languageReducer = languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;
