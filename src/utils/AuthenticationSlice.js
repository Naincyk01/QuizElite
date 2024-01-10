import { createSlice } from "@reduxjs/toolkit";

const AuthenticationSlice = createSlice({
    name:'authenticationDetails',
    initialState:{
        isAuthenticated:false,
    },
    reducers:{
        setAuthentication:(state, action) => {
            state.isAuthenticated=!state.isAuthenticated
        }
    }
})

export const {setAuthentication} = AuthenticationSlice.actions
export default AuthenticationSlice.reducer;