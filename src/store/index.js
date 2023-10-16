import { configureStore, createSlice } from "@reduxjs/toolkit";

let headerClass = createSlice({
  name: "headerClass",
  initialState: false,
});

export default configureStore({
  reducer: {
    headerClass: headerClass.reducer,
  },
});
