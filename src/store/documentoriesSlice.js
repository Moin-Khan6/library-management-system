import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';
import { documentories } from "../utils/appData/documentories";

const slice = createSlice({
  name: "documentoriesList",
  initialState: {
    documentories:documentories
  },
  reducers: {
    documentoriesAdded: (state, action) => {
          state.documentories.push({_id:uuid(),...action.payload});
    },
    documentoriesDeleted:(state, action) => {
      let data = state.documentories.filter(item => item._id != action.payload)
      state.documentories = data;
    },
    documentoriesEdited:(state, action) => {
      
      const {booksData , index} = action.payload;
      console.log("data user",booksData)
      console.log("index",index)
      state.documentories[index] = booksData;
    },
  },
});

export const { documentoriesAdded, documentoriesDeleted, documentoriesEdited} = slice.actions;
export default slice.reducer;