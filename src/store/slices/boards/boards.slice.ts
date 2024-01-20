import { createSlice } from "@reduxjs/toolkit";
import BoardsState from "@custom-types/states/BoardsState";

const initialState: BoardsState = {
  list: [],
};

const boardsSlice = createSlice({
  name: "@boards",
  initialState,
  reducers: {

    addItem: (state, action) => {

    },

    removeItem: (state, action) => {

    },

    updateItem: (state, action) => {

    },

  },
});

export const boardsReducer = boardsSlice.reducer;
export const { addItem, updateItem, removeItem } = boardsSlice.actions;