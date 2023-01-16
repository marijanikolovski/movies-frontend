import { put, call, takeLatest, take } from "redux-saga/effects";
import { genreService } from "../../services/GenreService";
import {
    setGenres,
    getGenres
} from "./slice";

function* getGenresHandler() {
  try {
    const genres = yield call(genreService.getAll);
      yield put(setGenres(genres));
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetGenres() {
    yield takeLatest(
        getGenres.type,
        getGenresHandler
    )
}
