const initState = [
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
    priority: "High",
  },
  {
    id: 3,
    name: "Learn nodejS",
    completed: false,
    priority: "Low",
  },
];

const todoListRecuder = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoListRecuder;
