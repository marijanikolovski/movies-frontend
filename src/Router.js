import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AppRegister } from "./pages/AppRegister";
import { AppLogin } from "./pages/AppLogin";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "./store/user/selector";
import { getActiveUser } from "./store/user/slice";
import { AddMovie } from "./pages/AddMovie";
import { AppMovies } from "./pages/AppMovies";
import { SingleMovie } from "./pages/SingleMovie";

function GuestRoute({ children, ...props }) {
    const isGuest = !useSelector(selectToken);

    return <Route {...props}>{isGuest ? children : <Redirect to="/" />}</Route>;
}

function PrivateRoute({ children, ...props }) {
    const isAuthenticated = useSelector(selectToken);

    return (
        <Route {...props}>
            {isAuthenticated ? children : <Redirect to="/login" />}
        </Route>
    );
}

export const Router = () => {
    const isAuthenticated = useSelector(selectToken);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getActiveUser())
        }
    }, [])

    return (
        <Switch>
            <GuestRoute path="/register">
                <AppRegister />
            </GuestRoute>
            <GuestRoute path="/login">
                <AppLogin />
            </GuestRoute>
            <PrivateRoute exact path='/movies'>
                <AppMovies />
            </PrivateRoute>
            <PrivateRoute  path='/movies/:id'>
                <SingleMovie />
            </PrivateRoute>
            <PrivateRoute path='/create'>
                <AddMovie />
            </PrivateRoute>
            <Route exact path="/">
                <Redirect to="/movies" />
            </Route>
        </Switch>
    );
};
