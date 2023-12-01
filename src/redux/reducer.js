const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: 1,
      name: "Learn redux",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "Learn react",
      completed: true,
      priority: "Hight",
    },
    {
      id: 3,
      name: "Learn nodejS",
      completed: false,
      priority: "Low",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    default:
      return state;
  }
};

export default rootReducer;
