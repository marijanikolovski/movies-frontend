import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  addMovie: () => { },
  getMovies: () => { },
  getMovie: () => { },
  likeMovie: () => { },
  dislikeMovie: () => { },
  addComment: () => { },
  getComments: () => { }
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
  setCommentsWithPaginated
} = MoviesSlice.actions;

export default MoviesSlice.reducer;
