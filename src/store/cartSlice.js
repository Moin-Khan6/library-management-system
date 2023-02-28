import { createSlice } from "@reduxjs/toolkit";
import { books } from "../utils/appData/books";
import uuid from 'react-uuid';

const slice = createSlice({
  name: "BooksList",
  initialState: {
    books:books
  },
  reducers: {
    bookAdded: (state, action) => {
          state.books.push({_id:uuid(),...action.payload});
    },
    bookDeleted:(state, action) => {
      console.log(action.payload)
      let data = state.books.filter(item => item._id != action.payload)
      state.books = data;
    },
    bookEdited:(state, action) => {
      const {booksData , index} = action.payload;
      console.log("data user",booksData)
      console.log("index",index)
      state.books[index] = booksData;
    },
  },
});

export const { bookAdded, bookDeleted, bookEdited} = slice.actions;
export default slice.reducer;