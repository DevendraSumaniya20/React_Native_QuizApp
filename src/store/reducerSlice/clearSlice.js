import {createSlice} from '@reduxjs/toolkit';

const clearSlice = createSlice({
  name: 'clear',
  initialState: {
    quizdata: [],
  },
  reducers: {
    clearQuizData: state => {
      state.quizdata = [];
    },
  },
});
export const {clearQuizData} = clearSlice.actions;
export default clearSlice.reducer;
