import { combineReducers } from "redux";
import booksReducer from "./booksReducer";

export const allReducers = combineReducers({
    data: booksReducer
})
