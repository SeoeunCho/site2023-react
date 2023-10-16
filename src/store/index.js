import { configureStore, createSlice } from "@reduxjs/toolkit";

let headerClass = createSlice({
  name: "headerClass",
  initialState: false,
});

let scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
scrollTop();

export default configureStore({
  reducer: {
    headerClass: headerClass.reducer,
  },
});
