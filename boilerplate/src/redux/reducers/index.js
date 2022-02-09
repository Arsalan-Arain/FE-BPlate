import { combineReducers } from "redux";
import rotateReducer  from "./rotateReducer";

const reducers = combineReducers({
    rotate: rotateReducer
})

export default reducers;