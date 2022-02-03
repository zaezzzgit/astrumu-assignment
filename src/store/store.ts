import { configureStore } from "@reduxjs/toolkit";

import headerSlice from "./features/headerSlice";
import issuesSlice from "./features/issuesSlice";
export const store = configureStore({
  reducer: { headerSlice, issuesSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
