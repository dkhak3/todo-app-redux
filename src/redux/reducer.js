import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/filtersSlice";
import todoListRecuder from "../components/TodoList/todosSlice";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListRecuder,
});

export default rootReducer;
