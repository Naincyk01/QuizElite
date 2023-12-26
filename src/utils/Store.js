import { configureStore } from "@reduxjs/toolkit"
import SignSlice from "./SignSlice"
import QuestionSlice from "./QuestionSlice";
import ScoreSlice from "./ScoreSlice";


const Store = configureStore ({
    reducer : {
        signData : SignSlice,
        quesDetails:QuestionSlice,
        Score:ScoreSlice,
    }
})

export default Store;