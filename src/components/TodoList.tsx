import React, {useEffect} from "react";
import {useSelectorTyped} from "../hooks/useSelectorTyped";
import {useActions} from "../hooks/useActions";

export const TodoList: React.FC = () => {
    const {page, error, todos, limit} = useSelectorTyped(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (error)
        return <h1>ERROR! {error}</h1>

    return (
        <div>
            {todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}

            <div style={{display: 'flex'}}>
                {pages.map(p =>
                    <div
                        onClick={() => setTodoPage(p)}
                        style={{
                            border: p === page ? '2px solid red' : '2px solid gray',
                            padding: 10,
                            cursor: 'pointer'
                        }}
                    >
                        {p}
                    </div>
                )}
            </div>

        </div>
    )
}