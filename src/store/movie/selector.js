const selectMovies = (state) => state.movies.page;

const selectNewMovie = (state) => state.movies.newMovie;

export { 
    selectMovies,
    selectNewMovie
};
