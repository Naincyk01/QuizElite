import { configureStore } from "@reduxjs/toolkit"
import SignSlice from "./SignSlice"


const Store = configureStore ({
    reducer : {
        signData : SignSlice,
    }
})

export default Store;