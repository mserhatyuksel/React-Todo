import { useState } from "react";
import Filters from "./components/Filters";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
function App() {
    const [todos, setTodos] = useState([
        { id: 1, todo: "test", isCompleted: false },
        { id: 2, todo: "test2", isCompleted: false },
    ]);
    const [input, setInput] = useState("");

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };
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
        // const temp = ;
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
    return (
        <div className="App">
            <Input
                addTodo={addTodo}
                value={input}
                onSubmitTodo={onSubmitTodo}
                onChangeInput={onChangeInput}
            />
            <TodoList
                todos={todos}
                onChangeTodo={onChangeTodo}
                deleteHandler={deleteHandler}
            />
            <Filters />
            <Footer />
        </div>
    );
}

export default App;
