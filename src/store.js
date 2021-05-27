import { configureStore } from '@reduxjs/toolkit';
import toDolist from './reducer'

export default configureStore({
    reducer: {
      todeReducer: toDolist,
    },
  })
  