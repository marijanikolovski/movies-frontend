import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  addMovie: () => { },
  getMovies: () => { },
  getMovie: () => { },
  likeMovie: () => { },
  dislikeMovie: () => { },
  addComment: () => { },
  getComments: () => { },
  createWatchList: () => { },
  getWatchList: () => { },
  deleteMovieFromList: () => { },
  watchedMovie: () => { },
  getTopMovies: () => { },
  getRelateMovies: () => { },
  getOmdbMovies: () => { }
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
    comments: {
      data: [],
      current_page: 0,
      last_page: 0,
    },
    term: null,
    status: '',
    watchList: [],
    topMovies: [],
    relateMovies: [],
    omdvMoves: [],
    inputTitle: '',
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },

    setMovie(state, action) {
      state.movie = action.payload;
      state.status = action.payload.status;
    },

    setComments(state, action) {
      state.comments = action.payload
    },

    setCommentsWithPaginated(state, action) {
      state.comments.data = [...state.comments.data, ...action.payload.data];
      state.comments.current_page = action.payload.current_page;
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

    setMovieWithNewComment(state, action) {
      state.comments = {
        ...state.comments,
        data: [...state.comments.data, action.payload],
      };
    },

    setWatchList(state, action) {
      state.watchList = action.payload
    },

    setWatchListWithNewMovie(state, action) {
      state.watchList = [...state.watchList, action.payload]
    },

    setWatchListWithoutMovie(state) {
      state.watchList = state.watchList
    },

    setTopMovies(state, action) {
      state.topMovies = action.payload
    },

    setRelateMovies(state, action) {
      state.relateMovies = action.payload
    },

    setTatleMovieForInput(state, action) {
      state.titleMovieForInput = action.payload
    },

    setOmdbMovies(state, action) {
      state.omdvMoves = action.payload
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
  setMovieWithLikeDislike,
  addComment,
  setMovieWithNewComment,
  getComments,
  setComments,
  setCommentsWithPaginated,
  createWatchList,
  setWatchList,
  getWatchList,
  setWatchListWithNewMovie,
  deleteMovieFromList,
  setWatchListWithoutMovie,
  watchedMovie,
  getTopMovies,
  setTopMovies,
  getRelateMovies,
  setRelateMovies,
  getOmdbMovies,
  setOmdbMovies,
} = MoviesSlice.actions;

export default MoviesSlice.reducer;
