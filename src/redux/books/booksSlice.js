import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => ({
      ...state,
      books: payload,
    }),
    removeBook: (state, { payload }) => ({
      ...state,
      books: state.books.filter((book) => book.id !== payload),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
