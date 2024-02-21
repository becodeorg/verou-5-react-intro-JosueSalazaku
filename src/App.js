import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import HeaderComponents from "/Users/josuesalazaku/Developer/BeCode/Summerpastures/verou-5-react-intro-josuesalazaku/src/Components/HeaderComponents.js";
import FooterComponents from "/Users/josuesalazaku/Developer/BeCode/Summerpastures/verou-5-react-intro-josuesalazaku/src/Components/FooterComponents.js";
import Todolist from "./Components/Todolist.js";
import TodoComponents from "/Users/josuesalazaku/Developer/BeCode/Summerpastures/verou-5-react-intro-josuesalazaku/src/Components/TodoComponents.js";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    console.log("Adding Todo:", name);
    if (name === "") return;
    const newTodo = { id: uuidv4(), name: name, complete: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    todoNameRef.current.value = "";
  };

  const checkboxTodos = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("Stored Todos:", storedTodos);
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    const saveTodosToLocalStorage = () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    };

    // Save todos to localStorage when the component unmounts
    window.addEventListener("beforeunload", saveTodosToLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", saveTodosToLocalStorage);
    };
  }, [todos]);

  return (
    <div className="App h-screen bg-zinc-900 flex flex-col">
      <HeaderComponents />
      <main className="flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-6xl pb-20">My to do's</h1>
        <Todolist todos={todos} checkboxTodos={checkboxTodos} />
        <div className="flex justify-evenly items-center space-x-3">
          <input
            type="text"
            ref={todoNameRef}
            className="rounded-md h-8 w-52 p-2"
          />
          <button
            onClick={handleAddTodo}
            className="my-5 p-2 rounded-md font-bold text-white border border-green-600"
          >
            ADD
          </button>
          <button className="my-5 p-2 rounded-md font-bold text-white border border-red-600">
            DELETE
          </button>
        </div>
        <TodoComponents />
      </main>
      <FooterComponents />
    </div>
  );
}

export default App;
