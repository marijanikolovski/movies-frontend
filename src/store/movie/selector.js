const selectMovies = (state) => state.movies.movies;

const selectNewMovie = (state) => state.movies.newMovie;

const selectMovie = (state) => state.movies.movie;

export { 
    selectMovies,
    selectNewMovie,
    selectMovie
};
