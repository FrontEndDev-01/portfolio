import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface menuState {
  isNavbar: boolean
}
const initialState: menuState = {
 isNavbar: false
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIsNavbar: (state) => {
      state.isNavbar = !state.isNavbar
    },
  },
});

export const { setIsNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
