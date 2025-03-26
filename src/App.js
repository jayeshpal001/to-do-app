import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { About } from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onEdit = (sno, updatedTitle, updatedDesc) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.sno === sno
          ? { ...todo, title: updatedTitle, desc: Array.isArray(updatedDesc) ? updatedDesc : [updatedDesc] }
          : todo
      )
    );
  };

  const onDelete = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((e) => e.sno !== todo.sno));
  };

  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, desc: Array.isArray(desc) ? desc : [desc] };
    setTodos([...todos, myTodo]);
  };

  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <div className="flex-1 flex justify-center items-center bg-gray-900">
                  <Todos todos={todos} onDelete={onDelete} onEdit={onEdit} />
                </div>
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
