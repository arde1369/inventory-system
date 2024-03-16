import { createSlice } from "@reduxjs/toolkit";

const authStore = createSlice({
    name : 'auth',
    initialState : {
        loggedInUser : null
    },
    reducers : {
        setLoggedInUser(state,action) {
            state.loggedInUser = action.payload
        }
    }
})

export const authActions = authStore.actions
export default authStore.reducer