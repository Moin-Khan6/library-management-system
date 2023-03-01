import { createSlice } from "@reduxjs/toolkit";
import { newsPaper } from "../utils/appData/newsPaper";
import uuid from 'react-uuid';

const slice = createSlice({
  name: "newsPaperList",
  initialState: {
    newsPaper:newsPaper
  },
  reducers: {
    newsPaperAdded: (state, action) => {
          state.newsPaper.push({_id:uuid(),...action.payload});
    },
    newsPaperDeleted:(state, action) => {
      let data = state.newsPaper.filter(item => item._id != action.payload)
      state.newsPaper = data;
    },
    newsPaperEdited:(state, action) => {
      const {booksData , index} = action.payload;
      console.log("data user",booksData)
      console.log("index",index)
      state.newsPaper[index] = booksData;
    },
  },
});

export const { newsPaperAdded, newsPaperDeleted, newsPaperEdited} = slice.actions;
export default slice.reducer;