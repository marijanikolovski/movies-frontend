import { put, call, takeLatest, take } from "redux-saga/effects";
import { authService } from "../../services/AuthService";
import {
    setActiveUser,
    setToken,
    register,
    getActiveUser,
    login,
    logout
} from "./slice";

function* registerHandler(action) {
    try {
        const data = yield call([authService, authService.register], action.payload);

        yield put(setActiveUser(data.user));
    } catch (e) {
        console.error(e);
    }
}

function* loginHandler(action) {
    try {
        const data = yield call(authService.login, action.payload);

        yield put(setActiveUser(data.user));
        yield put(setToken(data.token));
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

function* logoutHandler() {
    try {
        yield call([authService, authService.logout]);

        yield put(setActiveUser(null));
        yield put(setToken(null));
    } catch (e) {
        console.error(e);
    }
}

export function* watchForUserSagas() {
    yield takeLatest(register.type, registerHandler);
    yield takeLatest(login.type, loginHandler);
    yield takeLatest(getActiveUser.type, getActiveUserHendler);
    yield takeLatest(logout.type, logoutHandler);
}
