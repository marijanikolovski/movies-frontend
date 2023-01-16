import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    register: () => { },
    login: () => { },
    getActiveUser: () => { },
    logout: () => { },
};

export const usersSlice = createSlice({
    name: "auth",
    initialState: {
        activeUser: {},
        token: localStorage.getItem("token"),
    },
    reducers: {
        setActiveUser(state, action) {
            state.activeUser = action.payload;
        },

        setToken(state, action) {
            state.token = action.payload;
        },
        ...middlewareActions,
    },
});

export const {
    register,
    refreshToken,
    setActiveUser,
    setToken,
    getActiveUser,
    login,
    logout
} = usersSlice.actions;

export default usersSlice.reducer;