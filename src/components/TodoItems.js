import React from "react";

export const TodoItems = ({ todo, onDelete }) => {
  return (
    <div className="flex justify-center items-center w-full p-2 mb-10">
      <div
        className="border shadow-teal-300 shadow-md w-[90vw] sm:w-4/5 md:w-3/5 p-6 rounded-lg mt-10 h-fit"
        style={{
          minWidth: "28vw", // Ensures width consistency on large screens
          backgroundColor: "#2d3748",
          color: "#ffffff",
        }}
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-mono font-extrabold py-3">
          {todo.sno}. {todo.title}
        </h3>
        <ul className="list-disc text-base sm:text-lg px-4 sm:px-6">
          <li>{todo.desc}</li>
        </ul>
        <button
          className="bg-red-600 text-white rounded-lg px-3 py-2 mt-4 hover:bg-red-700 transition duration-300"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
