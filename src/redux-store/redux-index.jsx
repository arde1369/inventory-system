import { configureStore } from "@reduxjs/toolkit";
import authStore from "./AuthStore";

const reduxStore = configureStore({
    reducer : {
        auth : authStore
    }
})

export default reduxStore