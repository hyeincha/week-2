import React from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import { useSelector } from "react-redux";
import TodoList from "./components/pages/TodoList";

const App = () => {
  const todoStore = useSelector((state) => state);
  console.log(todoStore);
  return <TodoList />;
};

export default App;
