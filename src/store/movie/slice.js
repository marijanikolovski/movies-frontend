import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    addMovie: () => {},
    getMovies: () => {},
};

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    newMovie: {
      title: "",
      description: "",
      cover_image: "",
    },
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },

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
    addMovie,
    getMovies,
    setMovies,
} = MoviesSlice.actions;

export default MoviesSlice.reducer;
