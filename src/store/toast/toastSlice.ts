import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface toastState {
  data?: {
    title?: string,
    message?: string,
  },
  show?: boolean,
  position?: string,
  type?: string
}
const initialState: toastState = {
  data: {
    title: "",
    message: ""
  },
  show: false,
  position: 'center',
  type: 'danger'
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<any>) => {
      state.data = action?.payload?.data;
      state.position = action?.payload?.position;
      state.type = action?.payload?.type;
      state.show = true
    },
    hideToast: (state) => {
      state.data =  {
        title: "",
        message: ""
      }
      state.show = false
    },
    setToastPosition: (state, action: PayloadAction<any>) => {
      state.position = action.payload
    }
  },
});

export const { showToast, hideToast, setToastPosition } = toastSlice.actions;

export default toastSlice.reducer;
