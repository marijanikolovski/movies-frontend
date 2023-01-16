import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import movieReducer from "./movie/slice";
import genreReducer from "./genre/slice";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        auth: userReducer,
        movies: movieReducer,
        genres: genreReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}
