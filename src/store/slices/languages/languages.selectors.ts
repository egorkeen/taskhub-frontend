import {RootState} from "@store/store";

export const selectCurrentLanguage = (state: RootState) => state.language?.language;