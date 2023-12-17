 import { createSlice } from "@reduxjs/toolkit";

const SignSlice = createSlice({
    name:'signData',
    initialState:{
        name:'',
        password:'',
    },

    reducers:{
        storeName:(state, action)=>{
            state.name = action.payload;
        },
        storePassword:(state, action)=>{
            state.password = action.payload;
        },
    }
})

export const {storeName, storePassword} = SignSlice.actions;
export default SignSlice.reducer; 