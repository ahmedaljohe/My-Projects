import { createSlice } from '@reduxjs/toolkit';

const toDolist = createSlice({
  name:'counter',
  initialState:{
    complated:false,
    comTask:0,
    uncomTask:0,
    tasks: [],
  },
  reducers:{
    checkTask:(state, action) => {
      console.log(`action.payload.value`, action.payload.complated)
      return({
        ...state,
        comTask:action.payload.complated?state.comTask+1:state.comTask-1,
      })},

    setTasks: (state, action) => {
      console.log(`action.payload`, action.payload)
      return ({
        ...state,
        tasks: action.payload,
        comTask: action.payload?.filter(s => s.complated).length,
        uncomTask: action.payload?.filter(s => !s.complated).length,
      });
    },
  }
})

export const { checkTask, setTasks } = toDolist.actions;

export default toDolist.reducer

