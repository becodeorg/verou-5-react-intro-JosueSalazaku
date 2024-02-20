import HeaderComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/verou-5-react-intro-josuesalazaku/src/Components/HeaderComponents.js'
import FooterComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/verou-5-react-intro-josuesalazaku/src/Components/FooterComponents.js'
import Todolist from './Components/Todolist.js'
import TodoComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/verou-5-react-intro-josuesalazaku/src/Components/TodoComponents.js';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useRef } from 'react'


function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });

    todoNameRef.current.value = ''; // Setting it to an empty string, as it's a controlled input.
  }

  return (
    <div className="App h-screen bg-zinc-900 flex flex-col">
      <HeaderComponents/>
      <main className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-white text-6xl pb-20'>My to do's</h1>

        <Todolist todos={todos}  />
        <div className="flex justify-evenly items-center space-x-3">
             <input type="text" ref={todoNameRef} className="rounded-md h-8 w-52 p-2" />
             <button onClick={handleAddTodo} className="my-5 p-2 rounded-md font-bold text-white border border-green-600">ADD</button>
             <button className="my-5 p-2 rounded-md font-bold text-white border border-red-600">DELETE</button>
       </div>
        
        
        <TodoComponents/>
      </main>
      <FooterComponents/>

    </div>
  );
}

export default App;
