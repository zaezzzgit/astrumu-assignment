import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iOwnerRepo, iIssue } from "../../types/Types";

interface IssuesState {
  issues: iIssue[];
  isLoading: boolean;
  ownerRepo: iOwnerRepo;
  listNeedsRefresh: boolean;
}

const initialState: IssuesState = {
  issues: [],
  isLoading: false,
  ownerRepo: { id: "", name: "" },
  listNeedsRefresh: false,
};

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    setIssues: (state, action: PayloadAction<iIssue[]>) => {
      state.issues = action.payload;
    },
    setIssuesLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setOwnerRepo: (state, action: PayloadAction<iOwnerRepo>) => {
      state.ownerRepo = action.payload;
    },
    addIssue: (state, action: PayloadAction<iIssue>) => {
      state.issues.push(action.payload);
    },
  },
});

export const { setIssues, setIssuesLoadingState, setOwnerRepo, addIssue } =
  issuesSlice.actions;

export default issuesSlice.reducer;
