import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  addMovie: () => { },
  getMovies: () => { },
  getMovie: () => { },
};

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    page: {
      data: [],
      current_page: 0,
      last_page: 0,
    },
    newMovie: {
      title: "",
      description: "",
      cover_image: "",
    },
    movie: {},
  },
  reducers: {
    setMovies(state, action) {
      state.page = action.payload;
    },

    setMovie(state, action) {
      state.movie = action.payload;
    },

    setPaginated(state, action) {
      state.page.data = [...state.page.data, ...action.payload.data];
      state.page.current_page = action.payload.current_page;
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
  setPaginated,
  setMovie,
  getMovie
} = MoviesSlice.actions;

export default MoviesSlice.reducer;
