// 액션 밸류
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const READ_TODO = "READ_TODO";

// 액션 크리에이터
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

// 초기 상태값
const initialState = {
  // 처음에 todo: 라고 이름을 붙여주지 않고 진행했는데 엉망진창이 됨 왜 와이?????
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

// 리듀서
const todolist = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.id),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todo: state.todo.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    default:
      return state;
  }
};

export default todolist;
