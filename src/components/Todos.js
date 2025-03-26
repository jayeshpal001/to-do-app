import React from "react"; // Importing React
import { TodoItems } from "./TodoItems"; // Importing TodoItems component

// Todos component that receives todos list and functions for editing and deleting
export const Todos = ({ todos, onDelete, onEdit }) => {
  return (
    <div>
      <h1 className="text-5xl text-lime-50 text-center shadow-lg">Todos List</h1>
      
      {/* If there are no todos, show a message; otherwise, map through todos */}
      {todos.length === 0 ? (
        <p className="text-red-500 text-2xl text-center mt-5">No Todos to display</p>
      ) : (
        todos.map((items) => (
          <TodoItems todo={items} key={items.sno} onDelete={onDelete} onEdit={onEdit} />
        ))
      )}
    </div>
  );
};
