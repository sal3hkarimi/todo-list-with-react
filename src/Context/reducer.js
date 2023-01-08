/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import produce from "immer";

export const actionType = {
  NEW_TASK: "new_task",
  COMPLETED: "completed",
  DELETE_TASK: "delete_task",
  CHENGE_COLOR: "chenge_color",
  MARK_ALL_COMPLETED: "mark_all_completed",
  CLEAR_COMPLETED: "clear_completed",
  FILTER_ACTIVE: "filter_active",
};

export const initialState = {
  todos: [
    { id: 0, completed: true, text: "Design ui", color: "green" },
    { id: 1, completed: true, text: "discover state", color: "red" },
    { id: 2, completed: false, text: "discover actions" },
  ],
};

const nextState = produce((state, action) => {
  const { text, id, color } = action.payload;
  switch (action.type) {
    case actionType.NEW_TASK:
      const ids = state.todos.map((todo) => todo.id);
      state.todos.push({
        id: ids.length ? Math.max(...ids) + 1 : 1,
        completed: false,
        text: text,
      });
      break;

    case actionType.COMPLETED:
      console.log(state.todos);
      state.todos[id].completed = !state.todos[id].completed;
      break;

    case actionType.DELETE_TASK:
      state.todos = state.todos.filter((todo) => todo.id !== id);

      break;
    case actionType.CHENGE_COLOR:
      state.todos[id].color = color;
      break;

    case actionType.MARK_ALL_COMPLETED:
      state.todos.map((todo) => (todo.completed = true));
      break;
    case actionType.CLEAR_COMPLETED:
      state.todos = state.todos.filter((todo) => todo.completed === false);
      break;
    // case actionType.FILTER_ACTIVE:
    //   break;
  }
});

export const reducer = nextState;

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case actionType.NEW_TASK:
//       let { text } = action.payload;
//       const newKeyTask = Math.max(...Object.keys(state)) + 1;
//       return {
//         ...state,
//         [newKeyTask]: {
//           completed: false,
//           text,
//         },
//       };

//     case actionType.COMPLETED:
//       const { completed, id } = action.payload;
//       return {
//         ...state,
//         [id]: {
//           ...state[id],
//           completed: !completed,
//         },
//       };

//     case actionType.DELETE_TASK:
//       delete state[action.payload.id];
//       return {
//         ...state,
//       };

//     case actionType.CHENGE_COLOR:
//       const idColor = action.payload.id;
//       const { color } = action.payload;
//       return {
//         ...state,
//         [idColor]: {
//           ...state[idColor],
//           color,
//         },
//       };

//     case actionType.MARK_ALL_COMPLETED:
//       const stateValue = Object.values(state);

//       stateValue.forEach((todo) => {
//         todo.completed = true;
//       });

//       return {
//         ...state,
//       };

//     default:
//       throw Error(`action type not allowed: ${action.type}`);
//   }
// }

// console.log(reducer);
