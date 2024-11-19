import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook:(state, action) => {
      state.books.push(action.payload);
    },
    setBooks:(state, action) => {
      state.books = action.payload;
    },
  },
});

export const { addBook, setBooks } = bookSlice.actions;
export const selectBooks = (state) => state.books.books;
export default bookSlice.reducer;
