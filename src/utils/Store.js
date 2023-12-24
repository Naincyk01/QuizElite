import { configureStore } from "@reduxjs/toolkit"
import SignSlice from "./SignSlice"
import QuestionSlice from "./QuestionSlice";


const Store = configureStore ({
    reducer : {
        signData : SignSlice,
        quesDetails:QuestionSlice,
    }
})

export default Store;