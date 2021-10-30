import { useEffect, useState } from "react";

const TodoList = ({ todos, onChangeTodo, deleteHandler, filter }) => {
    const [filteredTodos, setFilteredTodos] = useState(todos);
    useEffect(() => {
        setFilteredTodos(todos);
    }, [todos]);
    useEffect(() => {
        if (filter === "active") {
            setFilteredTodos(todos.filter((item) => !item.isCompleted));
        } else if (filter === "completed") {
            setFilteredTodos(todos.filter((item) => item.isCompleted));
        } else {
            setFilteredTodos(todos);
        }
    }, [filter]);
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>

            <ul className="todo-list">
                {filteredTodos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            className={todo.isCompleted ? "completed" : ""}
                        >
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    onClick={() => onChangeTodo(todo)}
                                />
                                <label>{todo.todo}</label>
                                <button
                                    className="destroy"
                                    onClick={() => deleteHandler(todo)}
                                ></button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default TodoList;
