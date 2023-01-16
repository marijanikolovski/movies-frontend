import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    register: () => { },
    getActiveUser: () => { },
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
} = usersSlice.actions;

export default usersSlice.reducer;