const selectMovies = (state) => state.movies.movies;

const selectNewMovie = (state) => state.movies.newMovie;

export { 
    selectMovies,
    selectNewMovie
};
