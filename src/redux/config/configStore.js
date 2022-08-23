import { createStore } from "redux";
import { combineReducers } from "redux";
import addtodo from "../modules/CURD";

const rootReducer = combineReducers({
  addtodo: addtodo,
});
const store = createStore(rootReducer);

export default store;
