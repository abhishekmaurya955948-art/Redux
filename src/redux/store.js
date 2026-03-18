import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.js"

export const storee = configureStore({
    reducer:{
        counter:counterReducer
    }
})