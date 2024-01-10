import { configureStore } from "@reduxjs/toolkit"
import SignSlice from "./SignSlice"
import ScoreSlice from "./ScoreSlice";
import AuthenticationSlice from "./AuthenticationSlice";



const Store = configureStore ({
    reducer : {
        signData : SignSlice,
        Score:ScoreSlice,
        authenticationDetails:AuthenticationSlice
    }
})

export default Store;