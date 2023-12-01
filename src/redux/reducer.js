import filtersReducer from "../components/Filters/FiltersSlice";
import todoListRecuder from "../components/TodoList/TodosSlice";

const rootReducer = (state = {}, action) => {
  return {
    filters: filtersReducer(state.filters, action),
    todoList: todoListRecuder(state.todoList, action),
  };
};

export default rootReducer;
