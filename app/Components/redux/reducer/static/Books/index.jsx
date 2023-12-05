import { createSlice } from '@reduxjs/toolkit';
import { LS_Get_Data, LS_Set_Data } from '@/app/Components/LS_Get_Set_Data';

const state = {
  todos: LS_Get_Data('') ?? [],
};

export const todoSlice = createSlice({
  name: '',
  initialState: state,
  reducers: {
    addTodo: (state, action) => {
      // console.log(action.payload);
      state.todos.push(action.payload);
      LS_Set_Data('', state.todos);
      // console.log(state)
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
      LS_Set_Data('', state.todos);
    },
    editTodo: (state, action) => {
      // console.log(action.payload)
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      LS_Set_Data('', state.todos);
    },
  },
});

export const { addTodo, removetodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
