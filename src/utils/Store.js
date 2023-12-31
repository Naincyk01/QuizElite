import { configureStore } from "@reduxjs/toolkit"
import SignSlice from "./SignSlice"
import ScoreSlice from "./ScoreSlice";


const Store = configureStore ({
    reducer : {
        signData : SignSlice,
        Score:ScoreSlice,
    }
})

export default Store;