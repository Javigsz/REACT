/* eslint-disable react/prop-types */
import {Todo} from './Todo'

// eslint-disable-next-line react/prop-types
export const Todos = ({todos,addTodo,editTodo,deleteTodo,completeTodo,uncompleteTodo}) => {

    const handleClick = () => {

        const newTodo = {
            id: crypto.randomUUID(),
            title: 'new todo',
            completed: false
        }
        addTodo(newTodo)

    }

    return (
        <div className="todos">
            {todos.map(todo => 
                <div className="todo" key={todo.id}>
                    <Todo 
                        todo={todo} 
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
                        uncompleteTodo={uncompleteTodo}
                    />
                </div>
            )}
        <button onClick = {handleClick}>➕</button>
        </div>
    )
}