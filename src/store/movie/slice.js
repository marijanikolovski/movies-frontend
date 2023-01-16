import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    addMovie: () => {},
};

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    newMovie: {
      title: "",
      description: "",
      cover_image: "",
    },
  },
  reducers: {
    setNewMovie(state, action) {
      state.newMovie = action.payload;
    },

    setResetForm(state) {
      state.newMovie = {};
    },

    ...middlewareActions,
  },
});

export const {
    setNewMovie,
    setResetForm,
    addMovie
} = MoviesSlice.actions;

export default MoviesSlice.reducer;
