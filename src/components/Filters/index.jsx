import React from "react";

const Filters = ({ todos, changeFilter, filter, clearCompleted }) => {
    if (todos.length < 1) {
        return null;
    }
    const uncompleted = todos.filter((item) => !item.isCompleted).length;
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{uncompleted} </strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a
                        href="/#"
                        onClick={() => changeFilter("all")}
                        className={filter === "all" ? "selected" : ""}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        href="/#"
                        onClick={() => changeFilter("active")}
                        className={filter === "active" ? "selected" : ""}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        href="/#"
                        onClick={() => changeFilter("completed")}
                        className={filter === "completed" ? "selected" : ""}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            {uncompleted !== todos.length && (
                <button onClick={clearCompleted} className="clear-completed">
                    Clear completed
                </button>
            )}
        </footer>
    );
};

export default Filters;
