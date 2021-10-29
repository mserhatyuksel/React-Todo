import React from "react";

const TodoList = ({ todos }) => {
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>

            <ul className="todo-list">
                {todos.map((todo, i) => {
                  // className="completed"
                   return <li key={i} >
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>{todo}</label>
                            <button className="destroy"></button>
                        </div>
                    </li>;
                })}
            </ul>
        </section>
    );
};

export default TodoList;
