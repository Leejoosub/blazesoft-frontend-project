import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { BookData } from "@/types/bookdata";

export interface BookListState {
  books: BookData[];
}

const initialState: BookListState = {
  books: [],
};
export const bookListSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookData>) => {
      state.books.push(action.payload);
    },

    removeBook: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0 && state.books.length > action.payload) {
        state.books.splice(action.payload, 1);
      }
    },

    modifyBook: (state, action: PayloadAction<[BookData, number]>) => {
      const index = action.payload[1];
      if (index >= 0 && state.books.length > index) {
        state.books[index] = action.payload[0];
      }
    },
  },
});

export const { removeBook, addBook } = bookListSlice.actions;

export const selectBookList = (state: RootState) => state.bookList.books;

export default bookListSlice.reducer;
