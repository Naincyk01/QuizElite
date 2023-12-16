import { configureStore } from "@reduxjs/toolkit"
import SignInSlice from "./SignInSlice"

const Store = configureStore ({
    reducer : {
        signData : SignInSlice,
    }
})

export default Store;