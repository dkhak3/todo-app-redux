import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;

// reselect
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    console.log("🚀 ~ file: selectors.js:11 ~ todoList:", todoList);
    return todoList.filter((todo) => {
      return todo.name.includes(searchText);
    });
  }
);
