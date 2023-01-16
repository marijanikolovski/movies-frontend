import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getGenres: ()  => {},
};

export const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
  },
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },

    ...middlewareActions,
  },
});

export const { 
    getGenres,
    setGenres
} = genresSlice.actions;

export default genresSlice.reducer;