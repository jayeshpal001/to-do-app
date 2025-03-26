import React from 'react';
import { TodoItems } from './TodoItems';

export const Todos = ({ todos, onDelete }) => {
  return (
    <div>
      <h1 className="text-5xl text-lime-50  text-center shadow-lg">Todos List</h1>
      {todos.length === 0 ? (
        <p className="text-red-500 text-2xl text-center mt-5">No Todos to display</p>
      ) : (
        todos.map((items) => {
          return(<TodoItems todo={items} key={items.sno} onDelete={onDelete} />) 
        })
      )}
    </div>
  );
};
