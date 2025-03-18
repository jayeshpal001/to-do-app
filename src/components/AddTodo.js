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
        <h1 className="text-3xl md:text-4xl text-white text-center mb-6">
          Add a Todo
        </h1>
        <form className="max-w-lg mx-auto" onSubmit={submit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Todo Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Todo Title"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="desc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Todo Description
            </label>
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              id="desc"
              className="w-full p-3 text-sm rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Todo Description"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};
