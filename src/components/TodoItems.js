import React, { useState } from "react";

export const TodoItems = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDesc, setNewDesc] = useState(todo.desc);

  const handleSave = () => {
    onEdit(todo.sno, newTitle, newDesc);
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div className="flex justify-center items-center w-full p-2 mb-10">
      <div
        className="border shadow-teal-300 shadow-md w-[90vw] sm:w-4/5 md:w-3/5 p-6 rounded-lg mt-10 h-fit"
        style={{
          minWidth: "28vw",
          backgroundColor: "#2d3748",
          color: "#ffffff",
        }}
      >
        {isEditing ? (
          <>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="text-black p-2 w-full mb-2"
            />
            <input
              type="text"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              className="text-black p-2 w-full mb-2"
            />
            <button
              className="bg-green-500 text-white rounded-lg px-3 py-2 mt-4 hover:bg-green-700 transition duration-300"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white rounded-lg px-3 py-2 mt-4 hover:bg-gray-700 transition duration-300 ml-2"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-mono font-extrabold py-3">
              {todo.sno}. {todo.title}
            </h3>
            <ul className="list-disc text-base sm:text-lg px-4 sm:px-6 ">
              <li>{todo.desc}</li>
            </ul>
            <button
              className="mx-10 bg-blue-400 text-white rounded-lg px-3 py-2 mt-4 hover:bg-blue-700 transition duration-300"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-600 text-white rounded-lg px-3 py-2 mt-4 hover:bg-red-700 transition duration-300"
              onClick={() => onDelete(todo)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};
