import { put, call, takeLatest, take } from "redux-saga/effects";
import { movieService } from "../../services/MovieService";
import {
    addMovie,
    getMovies,
    setMovies
} from "./slice";
 
function* getMoviesHandler() {
  try {
    const movies = yield call(movieService.getAll);
      yield put(setMovies(movies));
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
