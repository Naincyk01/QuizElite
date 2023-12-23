import { createSlice } from "@reduxjs/toolkit"

const QuestionSlice = createSlice({
    name:'questionsDetails',
    initialState:{
        question1:1,
        question2:3,
    },

})

export default QuestionSlice.reducer