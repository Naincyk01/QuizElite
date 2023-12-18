 import { createSlice } from "@reduxjs/toolkit";

 const SignSlice = createSlice({
    name:'signData',
    initialState:{
        name:'',
        password:'',
        details:[],
    },

    reducers:{
        storeName:(state, action)=>{
            state.name = action.payload;
        },
        storePassword:(state, action)=>{
            state.password = action.payload;
        },
        storeDetails:(state, action) => {
            state.details.push(action.payload)
        }
    }
})

export const {storeDetails} = SignSlice.actions;
export default SignSlice.reducer; 