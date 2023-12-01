import { createSelector } from "reselect";

// select lấy ra từ dispatch
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;

// reselect
export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  (todoList, status, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText);
      }
      return todo.name.includes(searchText) && status === "Completed"
        ? todo.completed
        : !todo.completed;
    });
  }
);
