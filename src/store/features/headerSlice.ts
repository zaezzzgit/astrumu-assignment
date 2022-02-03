import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderState {
  pageTitle: string;
  userName: string;
  userDataLoaded: boolean;
}

const initialState: HeaderState = {
  pageTitle: "",
  userName: "",
  userDataLoaded: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.pageTitle = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setUserDataLoaded: (state, action: PayloadAction<boolean>) => {
      state.userDataLoaded = true;
    },
  },
});

export const { setTitle, setUserName, setUserDataLoaded } = headerSlice.actions;

export default headerSlice.reducer;
