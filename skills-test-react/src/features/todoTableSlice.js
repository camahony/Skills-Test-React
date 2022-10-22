import { createSlice } from '@reduxjs/toolkit'

//code originally copied from redux quick start guide 

export const todoTableSlice = createSlice({
  name: 'todoTable',
  initialState: {
    todos: [],
  },
  reducers: {
    addValue: (state, action) => {
        
        state.todos.push(action.payload)
    },
    removeValue: (state, action) => {
        
        console.log('AP: ', action.payload)
        state.todos = state.todos.filter(val => val !== action.payload.val);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addValue, removeValue } = todoTableSlice.actions

export default todoTableSlice.reducer