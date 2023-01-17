import { put, call, takeLatest, take } from "redux-saga/effects";
import { movieService } from "../../services/MovieService";
import {
  addMovie,
  getMovies,
  setMovies,
  setPaginated
} from "./slice";

function* getMoviesHandler(action) {
  try {
    const movies = yield call(movieService.getAll, action.payload.page);
    if (action.payload?.page > 1) {
      yield put(setPaginated(movies));
    } else {
      yield put(setMovies(movies));
    }
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
}
