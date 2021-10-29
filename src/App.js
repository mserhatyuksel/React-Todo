import { useState } from "react";
import Filters from "./components/Filters";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
function App() {
    const [todos, setTodos] = useState(["Test Todo"]);
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };
    return (
        <div className="App">
            <Input addTodo={addTodo} />
            <TodoList todos={todos} />
            <Filters />
            <Footer />
        </div>
    );
}

export default App;
