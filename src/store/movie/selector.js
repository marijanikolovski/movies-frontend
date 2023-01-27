const selectMovies = (state) => state.movies.movies;

const selectNewMovie = (state) => state.movies.newMovie;

const selectMovie = (state) => state.movies.movie;

const selectSearchTerm = (state) => state.movies.term;

const selectStatus = (state) => state.movies.status;

const selectComments = (state) => state.movies.comments;

const selectWatchList = (state) => state.movies.watchList;

const selectTopMovies = (state) => state.movies.topMovies;

const selectRelateMovies = (state) => state.movies.relateMovies;

const selectOmdvMoves = (state) => state.movies.omdvMoves;

export {
    selectMovies,
    selectNewMovie,
    selectMovie,
    selectSearchTerm,
    selectStatus,
    selectComments,
    selectWatchList,
    selectTopMovies,
    selectRelateMovies,
    selectOmdvMoves,
};
