const Input = ({ value, onSubmitTodo, onChangeInput }) => {
    return (
        <header className="header">
            <h1 className="title">todos</h1>
            <form onSubmit={onSubmitTodo}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={value}
                    onChange={onChangeInput}
                    autoFocus
                />
            </form>
        </header>
    );
};

export default Input;
