import { createSlice } from '@reduxjs/toolkit';

const toDolist = createSlice({
  name:'counter',
  initialState:{
    value:false,
    comTask:0,
    uncomTask:0,
  },
  reducers:{
    checkTask:(state,action)=>{
      console.log(`action`, action.payload)
      state.value=action.payload;
      state.comTask=state.value?state.comTask+1:state.comTask-1;
      // state.uncomTask=state.value?state.uncomTask-1:state.uncomTask+1;
      console.log(`state.comTask`, state.comTask)
      console.log(`value`, state.value)
    }
  }
})

export const { checkTask } = toDolist.actions;

export default toDolist.reducer

