import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/FiltersSlice";
import todoListRecuder from "../components/TodoList/TodosSlice";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListRecuder,
});

export default rootReducer;
