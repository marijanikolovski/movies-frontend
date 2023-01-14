import { put, call, takeLatest, take } from "redux-saga/effects";
import { authService } from "../../services/AuthService";
import {
    setActiveUser,
    setToken,
    register,
    getActiveUser
} from "./slice";

function* registerHandler(action) {
    try {
        const data = yield call([authService, authService.register], action.payload);

        yield put(setActiveUser(data.user));
    } catch (e) {
        console.error(e);
    }
}

function* getActiveUserHendler() {
    try {
        const activeUser = yield call([authService, authService.getActiveUser]);

        yield put(setActiveUser(activeUser));
    } catch (e) {
        console.error(e);
    }
}

export function* watchForUserSagas() {
    yield takeLatest(register.type, registerHandler);
    yield takeLatest(getActiveUser.type, getActiveUserHendler);
}
