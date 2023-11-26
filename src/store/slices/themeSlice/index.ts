import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkTheme: false
  },
  reducers: {
    changeTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    }
  }
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
