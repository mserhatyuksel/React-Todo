import React from "react";

const Filters = ({ todos }) => {
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
                    <a href="/#" className="selected">
                        All
                    </a>
                </li>
                <li>
                    <a href="/#">Active</a>
                </li>
                <li>
                    <a href="/#">Completed</a>
                </li>
            </ul>

            <button className="clear-completed">Clear completed</button>
        </footer>
    );
};

export default Filters;
