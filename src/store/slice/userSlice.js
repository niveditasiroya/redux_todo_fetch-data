import { createSlice } from "@reduxjs/toolkit";
import users from "../../users.json";

const usersSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    addToFav: (state, action) => {
      state = state.map(
        (select) => select.id == action.payload && (select.isfav = true)
      );
    },
    updateData: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id)
      state[index] = action.payload
    },
  },
});

export const { addToFav, updateData } = usersSlice.actions;
export default usersSlice.reducer;
