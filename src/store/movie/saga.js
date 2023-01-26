import { put, call, takeLatest, take } from "redux-saga/effects";
import { movieService } from "../../services/MovieService";
import {
  addMovie,
  getMovies,
  setMovies,
  setMoviesWihtPaginated,
  setMovie,
  getMovie,
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
  setRelateMovies
} from "./slice";

function* getMoviesHandler(action) {
  try {
    const movies = yield call(movieService.getAll, action.payload.page, action.payload.term);
    if (action.payload?.page > 1) {
      yield put(setMoviesWihtPaginated(movies));
    } else {
      yield put(setMovies(movies));
    }
  } catch (e) {
    console.log(e);
  }
}

function* getCommentsHandler(action) {
  try {
    const comments = yield call(movieService.getComments, action.payload, action.payload.page);
    if (action.payload?.page > 1) {
      yield put(setCommentsWithPaginated(comments));
    } else {
      yield put(setComments(comments));
    }
  } catch (e) {
    console.log(e);
  }
}

function* getMovieHandler(action) {
  try {
    const movie = yield call(movieService.get, action.payload);
    yield put(setMovie(movie));
  } catch (e) {
    console.log(e);
  }
}

function* addMovieHandler(action) {
  try {
    const newMovie = yield call(movieService.add, action.payload);
  } catch (e) {
    console.log(e);
  }
}

function* createLikeHandler(action) {
  try {
    const movie = yield call(
      movieService.createLike,
      action.payload
    );
    yield put(setMovieWithLikeDislike(movie));
  } catch (e) {
    console.error(e);
  }
}

function* createDislikeHandler(action) {
  try {
    const movie = yield call(
      movieService.createDisLike,
      action.payload
    );
    yield put(setMovieWithLikeDislike(movie));
  } catch (e) {
    console.error(e);
  }
}

function* addCommentHendle(action) {
  try {
    const newComment = yield call(movieService.addComment, action.payload);
    yield put(setMovieWithNewComment(newComment));
  } catch (e) {
    console.error(e);
  }
}

function* getWatchListHandle(action) {
  try {
    const watchList = yield call(movieService.getWatchList, action.payload);
    yield put(setWatchList(watchList));
  } catch (e) {
    console.log(e);
  }
}

function* createWatchListHandle(action) {
  try {
    const watchList = yield call(movieService.createWatchList, action.payload);
    yield put(setWatchListWithNewMovie(watchList));
  } catch (e) {
    console.error(e);
  }
}

function* deleteMovieFromListHandle(action) {
  try {
    const watchList = yield call(movieService.deleteMovieFromList, action.payload);
    yield put(setWatchListWithoutMovie(watchList));
  } catch (e) {
    console.error(e);
  }
}

function* watchedMovieHandle(action) {
  try {
    const watchList = yield call(movieService.watchedMovie, action.payload);
    yield put(setWatchListWithNewMovie(watchList));
  } catch (e) {
    console.error(e);
  }
}

function* topMoviesHandler() {
  try {
    const popularMovies = yield call(movieService.topMovies);
    yield put(setTopMovies(popularMovies));
  } catch (e) {
    console.error(e);
  }
}

function* relateMoviesHandler(action) {
  try {
    const relateMovies = yield call(movieService.relateMovies, action.payload);
    yield put(setRelateMovies(relateMovies));
  } catch (e) {
    console.error(e);
  }
}

export function* watchForMoviesSagas() {
  yield takeLatest(getMovies.type, getMoviesHandler);
  yield takeLatest(addMovie.type, addMovieHandler);
  yield takeLatest(getMovie.type, getMovieHandler);
  yield takeLatest(getComments.type, getCommentsHandler);
  yield takeLatest(likeMovie.type, createLikeHandler);
  yield takeLatest(dislikeMovie.type, createDislikeHandler);
  yield takeLatest(addComment.type, addCommentHendle);
  yield takeLatest(createWatchList.type, createWatchListHandle);
  yield takeLatest(getWatchList.type, getWatchListHandle);
  yield takeLatest(deleteMovieFromList.type, deleteMovieFromListHandle);
  yield takeLatest(watchedMovie.type, watchedMovieHandle);
  yield takeLatest(getTopMovies.type, topMoviesHandler);
  yield takeLatest(getRelateMovies.type, relateMoviesHandler);
}
