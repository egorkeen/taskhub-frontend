import { combineReducers, configureStore } from "@reduxjs/toolkit";
// reducers
import { languageReducer } from "@store/slices/languages/languages.slice";
import { boardsReducer } from "@store/slices/boards/boards.slice";
import { usersReducer } from "@store/slices/users/users.slice";
import { popupsReducer } from "@store/slices/popups/popups.slice";

const rootReducer = combineReducers({
  language: languageReducer, // заменить языки на settingsReducer с языками, темой и т.п.
  boards: boardsReducer,
  users: usersReducer,
  popups: popupsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;