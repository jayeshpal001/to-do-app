import React from "react";
import Navbar from "./components/Navbar";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { useState } from 'react';
import Footer from "./components/Footer";
function App() {
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };
  const addTodo =(title, desc)=>{
    console.log("I am adding this todo", title, desc);
    let sno; 
    if (todos.length===0) {
      sno=1;
    }
    else{
       sno = todos[todos.length-1].sno+1;
    }
   
    const myTodo={
      sno: sno, 
      title: title, 
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    
  ]);

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />
      <AddTodo addTodo={addTodo}/>
      {/* Todo Section should take full height */}
      <div className="flex-1 flex justify-center items-center bg-gray-900">
      
        <Todos todos={todos} onDelete={onDelete} />
      </div>
     <Footer/>
    </div>
  );
}

export default App;
