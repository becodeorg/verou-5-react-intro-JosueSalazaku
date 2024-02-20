import React from "react";

export default function Todo({ todo }) {
  // Check if todo is undefined or null before accessing its properties
  if (!todo) {
    return null; // or some fallback content
  }

  const handleCheckboxChange = () => {
    // Handle the change here if needed
  };

  return (
    <div className="text-white font-bold">
      <section className="text-2xl space-x-2 py-5">
        <input
          type="checkbox"
          checked={false}
          onChange={handleCheckboxChange}
        ></input>
        {todo.name}
      </section>
    </div>
  );
}
