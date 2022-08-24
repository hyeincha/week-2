import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../components/pages/Details";
import TodoList from "../components/pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
