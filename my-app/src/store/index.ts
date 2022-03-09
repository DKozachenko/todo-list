import {createStore} from "redux";
import {rootReducer} from "./reducers";

export const myStore = createStore(rootReducer)