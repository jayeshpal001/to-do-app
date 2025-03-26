import React, { useEffect, useState } from "react"; // Importing React and hooks: useState (for managing state) and useEffect (for side effects)
import Navbar from "./components/Navbar"; // Importing the Navbar component
import { Todos } from "./components/Todos"; // Importing the Todos component
import { AddTodo } from "./components/AddTodo"; // Importing the AddTodo component
import { About } from "./components/About"; // Importing the About component
import Footer from "./components/Footer"; // Importing the Footer component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing React Router for navigation

function App() {
  // Using useState to manage todos list, initializing from localStorage if available
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos"); // Retrieving stored todos
    return savedTodos ? JSON.parse(savedTodos) : []; // Parsing and returning if available, else returning empty array
  });

  // useEffect to store todos in localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Storing todos array as a string
  }, [todos]); // Runs whenever 'todos' changes

  // Function to edit a todo
  const onEdit = (sno, updatedTitle, updatedDesc) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.sno === sno
          ? { ...todo, title: updatedTitle, desc: Array.isArray(updatedDesc) ? updatedDesc : [updatedDesc] }
          : todo
      )
    );
  };

  // Function to delete a todo
  const onDelete = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((e) => e.sno !== todo.sno)); // Removing todo with matching sno
  };

  // Function to add a new todo
  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1; // Generating serial number
    const myTodo = { sno, title, desc: Array.isArray(desc) ? desc : [desc] }; // Creating a new todo object
    setTodos([...todos, myTodo]); // Adding the new todo to the state
  };

  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Navbar /> {/* Rendering the Navbar */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} /> {/* Rendering AddTodo component with addTodo function */}
                <div className="flex-1 flex justify-center items-center bg-gray-900">
                  <Todos todos={todos} onDelete={onDelete} onEdit={onEdit} /> {/* Rendering Todos with props */}
                </div>
              </>
            }
          />
          <Route path="/about" element={<About />} /> {/* Rendering About page */}
        </Routes>
        <Footer /> {/* Rendering the Footer */}
      </div>
    </Router>
  );
}

export default App; // Exporting App component
