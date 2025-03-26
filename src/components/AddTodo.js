import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
      return;
    }
    addTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="mt-10 py-10 flex justify-center px-4">
      <div className="w-full sm:w-3/4 md:w-2/4 lg:w-1/3">
        <h1 className="text-3xl text-white text-center mb-6">Add a Todo</h1>
        <form onSubmit={submit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Todo Title"
            className="w-full p-3 text-sm rounded-lg border mb-4"/>
          
          <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder="Enter Todo Description"
            className="w-full p-3 text-sm rounded-lg border mb-4"/>
          
          <button type="submit" className="w-full px-5 py-2.5 text-sm font-medium text-white bg-green-500 rounded-lg">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};
