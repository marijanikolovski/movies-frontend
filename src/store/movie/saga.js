import { put, call, takeLatest, take } from "redux-saga/effects";
import { movieService } from "../../services/MovieService";
import {
  addMovie,
  getMovies,
  setMovies,
  setMoviesWihtPaginated,
  setMovie,
  getMovie
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

export function* watchForMoviesSagas() {
  yield takeLatest(getMovies.type, getMoviesHandler);
  yield takeLatest(addMovie.type, addMovieHandler);
  yield takeLatest(getMovie.type, getMovieHandler)
}
