// IMPORTING Redux
import { combineReducers, createStore } from "redux";

// IMPORTING Redux reducers
import tractorReducer from "./tractor/tractor.reducer";

// Combing Reducer and creating Store
const rootReducer = combineReducers({
  tractors: tractorReducer,
});

const store = createStore(rootReducer);

export default store;
