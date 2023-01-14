import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AppRegister } from "./pages/AppRegister";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "./store/user/selector";
import { getActiveUser } from "./store/user/slice";

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
        </Switch>
    );
};
