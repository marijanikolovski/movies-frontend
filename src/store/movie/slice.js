import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  addMovie: () => { },
  getMovies: () => { },
  getMovie: () => { },
  likeMovie: () => { },
  dislikeMovie: () => { }
};

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {
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
    term: null,
    status: ''
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },

    setMovie(state, action) {
      state.movie = action.payload;
      state.status = action.payload.status;
    },

    setMovieWithLikeDislike(state, action) {
      state.movie = action.payload.movie;
      state.status = action.payload.status;
    },

    setMoviesWihtPaginated(state, action) {
      state.movies.data = [...state.movies.data, ...action.payload.data];
      state.movies.current_page = action.payload.current_page;
    },

    setNewMovie(state, action) {
      state.newMovie = action.payload;
    },

    setResetForm(state) {
      state.newMovie = {};
    },

    setSearchTerm(state, action) {
      state.term = action.payload;
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
  setMoviesWihtPaginated,
  setMovie,
  getMovie,
  setSearchTerm,
  likeMovie,
  dislikeMovie,
  setMovieWithLikeDislike
} = MoviesSlice.actions;

export default MoviesSlice.reducer;
