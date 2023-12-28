import { createSlice } from "@reduxjs/toolkit";
import UsersState from "@custom-types/UsersState";

const initialState: UsersState = {
  currentUser: { nickname: "nickname", email: "some_email@email.com", avatar: "avatar" },
};

const usersScile = createSlice({
  name: "@users",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {

    },
  }
});

export const usersReducer = usersScile.reducer;
export const { setCurrentUser } = usersScile.actions;