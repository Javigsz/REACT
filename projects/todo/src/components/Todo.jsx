/* eslint-disable react/prop-types */
export const Todo = ( {todo,editTodo,deleteTodo,completeTodo,uncompleteTodo} ) => {

    const handleChange = (e) => {
        editTodo(
            {id: todo.id, title: e.target.value, completed: todo.completed}
        )
    }

    const handleClickDelete = () => {
        deleteTodo(todo.id)
    }

    const handleClickComplete = () => {
        completeTodo(todo.id)
    }

    const handleClickUncomplete = () => {
        uncompleteTodo(todo.id)
    }

    return (
        <>

        <input 
            type="text"
            value = {todo.title} 
            className={todo.completed ? 'line' : 'no-line'}
            onChange={handleChange}
            onFocus={(e) => {e.target.select()}}>
        </input>

        <span className="thrash" onClick={handleClickDelete}>🗑️</span>
        {!todo.completed ? 
            <span className="complete" onClick={handleClickComplete}>❌</span> 
            : <span className="uncomplete" onClick={handleClickUncomplete}>✅</span>
        }           
        </>
    )
}
