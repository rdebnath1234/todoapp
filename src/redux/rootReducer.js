import { combineReducers } from "redux";
import { todoSlice } from "./reducers/todoSlice";

const rootReducer = combineReducers({
    todo: todoSlice.reducer
});
export default rootReducer;