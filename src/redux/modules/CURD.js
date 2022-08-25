// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creator
let id = 3;
export const addTodo = ({ title, body }) => {
  return {
    type: ADD_TODO,
    payload: {
      id: id++,
      title,
      body,
      isDone: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

// Initial State
const initialState = {
  todo: [
    {
      id: 1,
      title: "리액트 학습",
      body: "이번 주는 Redux다!",
      isDone: false,
    },
    {
      id: 2,
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      isDone: true,
    },
  ],
};

// Reducer
const todolist = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todo: [...state.todo, action.payload],
      };
    case "DELETE_TODO":
      return {
        todo: state.todo.filter((todo) => todo.id !== action.id),
      };
    case "TOGGLE_TODO":
      return {
        todo: state.todo.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    default:
      return state;
  }
};

export default todolist;
