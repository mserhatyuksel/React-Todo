import { useEffect, useState } from "react";

const TodoList = ({
    todos,
    onChangeTodo,
    deleteHandler,
    filter,
    allCheckHandler,
}) => {
    const [filteredTodos, setFilteredTodos] = useState(todos);
    const [isAllChecked, setIsAllChecked] = useState(false);
    useEffect(() => {
        setFilteredTodos(todos);
        if (todos.filter((item) => !item.isCompleted).length === 0) {
            setIsAllChecked(true);
        } else {
            setIsAllChecked(false);
        }
    }, [todos]);
    useEffect(() => {
        if (filter === "active") {
            setFilteredTodos(todos.filter((item) => !item.isCompleted));
        } else if (filter === "completed") {
            setFilteredTodos(todos.filter((item) => item.isCompleted));
        } else {
            setFilteredTodos(todos);
        }
    }, [filter, todos]);
    const allCheck = () => {
        if (isAllChecked) {
            allCheckHandler(true);
            setIsAllChecked(false);
        } else {
            allCheckHandler(false);
            setIsAllChecked(true);
        }
    };
    return (
        <section className="main">
            {todos.length ? (
                <>
                    <input
                        className="toggle-all"
                        type="checkbox"
                        checked={isAllChecked}
                        readOnly={true}
                    />
                    <label htmlFor="toggle-all" onClick={allCheck}>
                        Mark all as complete
                    </label>
                </>
            ) : (
                ""
            )}

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
                                    onChange={() => onChangeTodo(todo)}
                                    checked={todo.isCompleted}
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
