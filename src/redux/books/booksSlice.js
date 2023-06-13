import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'GKsm2r2dbIC96A74ZU29';
const fetch_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  axios.get(fetch_URL)
    .then((response) => console.log(response))
    .catch((error) => console.log(error)),
);

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => ({
      ...state.books,
      books: [
        ...state.books,
        payload,
      ],
    }),
    removeBook: (state, { payload }) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== payload),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
