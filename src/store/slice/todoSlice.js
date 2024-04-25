import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      // console.log(action);
      state.push(action.payload);
    },
    dltTodo: (state, action) => {
      console.log(action.payload);
      return (state = state.filter((data) => data.id !== action.payload));
    },
    updateTodo: (state, action) => {
      console.log(action.payload);
      return (state = state.filter((data) => data.id === action.payload));
    },
    updateInputTodo: (state, action) => {
      state = state.map((updateInput) =>
        updateInput.id === action.payload.id
          ? (updateInput.va = !updateInput.update)
          : (updateInput.update = updateInput.update)
      );
    },
    toggleSelected: (state, action) => {
      state = state.map((select) =>
        select.id === action.payload
          ? (select.checked = !select.checked)
          : (select.checked = select.checked)
      );
    },
  },
});

export const { addTodo, dltTodo, updateTodo, updateInputTodo, toggleSelected } =
  todoSlice.actions;
export default todoSlice.reducer;
