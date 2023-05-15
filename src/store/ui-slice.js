import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false
}
const AuthSlice = createSlice(
    {
        name: 'authentication',
        initialState: initialAuthState,
        reducers: {
            signOut(state) {
                state.isAuthenticated = false;
            },
            signIn(state) {
                state.isAuthenticated = true;
            }
        }
    }
);
export const authActions = AuthSlice.actions;
export default AuthSlice;