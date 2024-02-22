import React from "react";

export default function Todo({ todo, checkboxTodos }) {
  if (!todo) {
    return null;
  }

  const handleTodoClick = () => {
    checkboxTodos(todo.id);
  };

  return (
    <div className="text-white font-bold">
      <section className="text-2xl py-5">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
          style={{ marginRight: '12px' }} // Adjust the value as needed
        ></input>
        {todo.name}
      </section>
    </div>
  );
  
}
