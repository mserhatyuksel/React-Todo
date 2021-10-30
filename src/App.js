import { useState } from "react";
import Filters from "./components/Filters";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
function App() {
    const [todos, setTodos] = useState([
        { id: 1, todo: "Learn JavaScript", isCompleted: true },
        { id: 2, todo: "Learn React", isCompleted: false },
        { id: 3, todo: "Have a life!", isCompleted: false },
    ]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("all");
    // Add todo
    const onSubmitTodo = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                todo: input,
                isCompleted: false,
            },
        ]);
        setInput("");
    };
    const onChangeInput = (e) => {
        setInput(e.target.value);
    };
    const onChangeTodo = (todo) => {
        setTodos(
            todos.map((item) => {
                return item.id === todo.id
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item;
            })
        );
    };
    const deleteHandler = (todo) => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };
    const changeFilter = (filter) => {
        setFilter(filter);
    };
    const clearCompleted = () => {
        setTodos(todos.filter((item) => !item.isCompleted));
    };
    const allCheckHandler = (isAllChecked) => {
        if (isAllChecked) {
            setTodos(
                todos.map((obj) => {
                    return { ...obj, isCompleted: false };
                })
            );
        } else {
            setTodos(
                todos.map((obj) => {
                    return { ...obj, isCompleted: true };
                })
            );
        }
    };
    return (
        <div className="App">
            <Input
                value={input}
                onSubmitTodo={onSubmitTodo}
                onChangeInput={onChangeInput}
            />
            <TodoList
                todos={todos}
                onChangeTodo={onChangeTodo}
                deleteHandler={deleteHandler}
                filter={filter}
                allCheckHandler={allCheckHandler}
            />
            <Filters
                todos={todos}
                changeFilter={changeFilter}
                filter={filter}
                clearCompleted={clearCompleted}
            />
            <Footer />
        </div>
    );
}

export default App;
