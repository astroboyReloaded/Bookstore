import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ID = 'NmerLOYOolwhXAVjaTow';
const BOOKS_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;

const initialState = {
  booksCollection: [],
  status: 'idle',
  isLoading: true,
  rspnsMsg: null,
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(BOOKS_URL);
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
      await axios.post(BOOKS_URL, payload);
      return payload;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId, { rejectWithValue }) => {
    try {
      await axios.delete(`${BOOKS_URL}/${bookId}`);
      return bookId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchBooks.fulfilled, (state, { payload }) => ({
        ...state,
        booksCollection: payload,
        status: 'success',
        isLoading: false,
      }))
      .addCase(fetchBooks.rejected, (state, { payload }) => ({
        ...state,
        status: 'failed',
        error: payload,
      }))
      .addCase(addBook.pending, (state) => ({
        ...state,
        status: 'adding book',
      }))
      .addCase(addBook.fulfilled, (state, { payload }) => ({
        ...state,
        status: 'idle',
        rspnsMsg: payload,
      }))
      .addCase(removeBook.pending, (state) => ({
        ...state,
        status: 'removing book',
      }))
      .addCase(removeBook.fulfilled, (state, { payload }) => ({
        ...state,
        status: 'idle',
        rspnsMsg: payload,
      }));
  },
});

export const { setStatus } = booksSlice.actions;

export default booksSlice.reducer;
