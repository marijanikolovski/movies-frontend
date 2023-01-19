const selectMovies = (state) => state.movies.movies;

const selectNewMovie = (state) => state.movies.newMovie;

const selectMovie = (state) => state.movies.movie;

const selectSearchTerm = (state) => state.movies.term;

export { 
    selectMovies,
    selectNewMovie,
    selectMovie,
    selectSearchTerm
};
