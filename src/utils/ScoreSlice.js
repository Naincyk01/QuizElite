import { createSlice } from "@reduxjs/toolkit";

const ScoreSlice = createSlice({
    name:'Score',
    initialState:{
        count:0,
    },

    reducers:{
        increaseCount:(state,action)=>{
            state.count++;
        }
    }
})

export const {increaseCount} = ScoreSlice.actions
export default ScoreSlice.reducer;