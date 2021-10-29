import { useState } from "react";

const Input = ({ addTodo }) => {
    const [input, setInput] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput("");
    };
    return (
        <header className="header">
            <h1 className="title">todos</h1>
            <form onSubmit={submitHandler}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    autoFocus
                />
            </form>
        </header>
    );
};

export default Input;
