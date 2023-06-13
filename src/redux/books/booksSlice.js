import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'GKsm2r2dbIC96A74ZU29';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

const initialState = {
  books: [],
  isLoading: false,
  responseMsg: '',
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (payload, { rejectWithValue }) => {
    try {
      await axios.post(API_URL, payload);
      return payload;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, { payload }) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== payload),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, { payload }) => ({
        ...state,
        books: payload,
        isLoading: false,
      }))
      .addCase(fetchBooks.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }))
      .addCase(addBook.fulfilled, (state, { payload }) => ({
        ...state,
        responseMsg: payload,
      }));
  },
});

export const { removeBook } = booksSlice.actions;

export default booksSlice.reducer;
