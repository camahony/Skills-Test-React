//code copied from redux quick start guide

import { configureStore } from '@reduxjs/toolkit'

import todoTableReducer from '../features/todoTableSlice'

export default configureStore({
  reducer: {
    todoTable: todoTableReducer
  },
})