import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state += 1;
    },
    decrement: (state, action) => {
      return state -= 1;
    },
    incrementByAction: (state, action) => {
      return state = state + action.payload;
    },
  },
});

export const {increment, decrement, incrementByAction} = countSlice.actions
export default countSlice.reducer;
