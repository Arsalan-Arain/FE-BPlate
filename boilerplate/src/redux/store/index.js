import { applyMiddleware, createStore  } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

// createStore takes reducers, initial state (for now leaved it empty), and 
export const store = createStore(reducers, {}, applyMiddleware(thunk))