import React, { useState } from "react";

export const TodoItems = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDesc, setNewDesc] = useState(todo.desc || []);
  const [descInput, setDescInput] = useState("");

  const addNewDescription = () => {
    if (descInput.trim() !== "") {
      setNewDesc([...newDesc, descInput]);
      setDescInput("");
    }
  };

  const handleSave = () => {
    onEdit(todo.sno, newTitle, newDesc);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center w-full p-2 mb-10">
      <div className="border shadow-teal-300 shadow-md w-[90vw] sm:w-4/5 md:w-3/5 p-6 rounded-lg mt-10 h-fit"
        style={{ minWidth: "28vw", backgroundColor: "#2d3748", color: "#ffffff" }}>
        
        {isEditing ? (
          <>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
              className="text-black p-2 w-full mb-2" />
            
            {newDesc.map((desc, index) => (
              <input key={index} type="text" value={desc}
                onChange={(e) => {
                  const updatedDesc = [...newDesc];
                  updatedDesc[index] = e.target.value;
                  setNewDesc(updatedDesc);
                }}
                className="text-black p-2 w-full mb-2"
              />
            ))}
            
            <input type="text" placeholder="Add new description..." value={descInput}
              onChange={(e) => setDescInput(e.target.value)}
              className="text-black p-2 w-full mb-2" />
            
            <button className="bg-green-500 text-white rounded-lg px-3 py-2 mt-4 hover:bg-green-700"
              onClick={addNewDescription}>+ Add Desc</button>
            
            <button className="bg-blue-500 text-white rounded-lg px-3 py-2 mt-4 hover:bg-blue-700 ml-2"
              onClick={handleSave}>Save</button>
            
            <button className="bg-gray-500 text-white rounded-lg px-3 py-2 mt-4 hover:bg-gray-700 ml-2"
              onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-mono font-extrabold py-3">{todo.sno}. {todo.title}</h3>
            <ul className="list-disc px-4">
              {Array.isArray(todo.desc) && todo.desc.length > 0 ? (
                todo.desc.map((desc, index) => <li key={index}>{desc}</li>)
              ) : (
                <li>No description available</li>
              )}
            </ul>
            
            <button className="mx-10 bg-blue-400 text-white rounded-lg px-3 py-2 mt-4 hover:bg-blue-700"
              onClick={() => setIsEditing(true)}>Edit</button>
            
            <button className="bg-red-600 text-white rounded-lg px-3 py-2 mt-4 hover:bg-red-700"
              onClick={() => onDelete(todo)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};
