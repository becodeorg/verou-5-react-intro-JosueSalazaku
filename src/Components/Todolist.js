import React from "react";
import Todo from "./TodoComponents";

export default function Todolist({ todos, checkboxTodos }) {

  return (
    <div className="text-white font-bold">
      {todos.map((todo) => (
        <Todo key={todo.id} checkboxTodos={checkboxTodos} todo={todo} />
      ))}
    </div>
  );
}

