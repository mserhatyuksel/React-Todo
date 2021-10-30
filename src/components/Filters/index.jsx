import React from "react";

const Filters = ({ todos, changeFilter }) => {
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
                        className="selected"
                    >
                        All
                    </a>
                </li>
                <li>
                    <a href="/#" onClick={() => changeFilter("active")}>
                        Active
                    </a>
                </li>
                <li>
                    <a href="/#" onClick={() => changeFilter("completed")}>
                        Completed
                    </a>
                </li>
            </ul>

            <button className="clear-completed">Clear completed</button>
        </footer>
    );
};

export default Filters;
