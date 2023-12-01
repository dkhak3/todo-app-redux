// ======== REDUX CORE ========

// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/prioritesFilterChange":
//       return {
//         ...state,
//         priorities: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default filtersReducer;

// ======== REDUX TOOLKIT ========
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      // mutation || IMMER
      state.search = action.payload;
    }, // => {type: filters/searchFilterChange}
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    }, // => {type: filters/statusFilterChange}
    prioritiesChange: (state, action) => {
      state.priorities = action.payload;
    }, // => {type: filters/prioritiesChange}
  },
});
