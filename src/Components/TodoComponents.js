import React from "react";

export default function Todo({ todos }) {
  // Check if todos is undefined or null before accessing its properties
  if (!todos) {
    return null; // or some fallback content
  }

  return (
    <div className="text-white font-bold">
      <section>
        <input type="checkbox" checked={false}></input>
        {todos.name}
      </section>
    </div>
  );
}