import { configureStore } from "@reduxjs/toolkit";
import counterStore from "./CounterStore";

const reduxStore = configureStore({
    reducer : {
        counter : counterStore
    }
})

export default reduxStore