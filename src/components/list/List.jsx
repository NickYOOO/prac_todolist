import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

import {useSelector} from "react-redux";   

function List() {

  const todos = useSelector((state)=> state.todo.list);
  console.log(todos)

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) 
            return (
              <Todo
              key={todo.id}
              todo={todo}
              />
            );
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) 
            return (
              <Todo
              key={todo.id}
                todo={todo}
              />
            );
        })}
      </div>
    </div>
  );
}

export default List;
