import React from "react";
import Todo from "./TodoComponents";

export default function Todolist({ todos }) {

  return (
    <div className="text-white font-bold">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

