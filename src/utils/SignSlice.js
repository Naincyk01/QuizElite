 import { createSlice } from "@reduxjs/toolkit";

 const SignSlice = createSlice({
    name:'signData',
    initialState:{
        currentUser:'',
        details:[],
    },

    reducers:{
        storeCurrentuser:(state, action)=>{
            state.currentUser = action.payload;
        },
        storeDetails:(state, action) => {
            state.details.push(action.payload)
        }
    }
})

export const {storeDetails,storeCurrentuser} = SignSlice.actions;
export default SignSlice.reducer; 