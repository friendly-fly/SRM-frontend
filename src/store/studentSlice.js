import { createSlice, configureStore } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    value: [],
  },
  reducers: {
    setStudent: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setStudent } = studentSlice.actions;

export default studentSlice.reducer;
