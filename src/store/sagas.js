import * as usersSagas from "./user/saga";
import * as moviesSagas from "./movie/saga";
import * as genresSagas from "./genre/saga";


const sagas = {
    ...usersSagas,
    ...moviesSagas,
    ...genresSagas
};

export default sagas;
