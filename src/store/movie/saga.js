import { put, call, takeLatest, take } from "redux-saga/effects";
import { movieService } from "../../services/MovieService";
import {
    addMovie
} from "./slice";

function* addMovieHandler(action) {
  try {
    const newMovie = yield call(movieService.add, action.payload);
  } catch (e) {
    console.log(e);
  }
}

export function* watchForMoviesSagas() {
  yield takeLatest(addMovie.type, addMovieHandler);
}
