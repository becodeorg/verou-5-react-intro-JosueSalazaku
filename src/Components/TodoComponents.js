import React from "react";

export default function Todo({ todo }) {
  
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
  