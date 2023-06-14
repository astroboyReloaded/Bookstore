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
  async (bookData, { rejectWithValue }) => {
    try {
      await axios.post(API_URL, bookData);
      return bookData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
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
      .addCase(addBook.fulfilled || removeBook.fulfilled, (state, { payload }) => ({
        ...state,
        responseMsg: payload,
      }));
  },
});

export default booksSlice.reducer;
