import { createSlice } from "@reduxjs/toolkit"

const QuestionSlice = createSlice({
    name:'quesDetails',
    initialState:{
        ques1:1,
        ques2:3,
        ques3:2,
        ques4:4,
    },

})

export default QuestionSlice.reducer