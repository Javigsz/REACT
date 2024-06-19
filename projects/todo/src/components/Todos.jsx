/* eslint-disable react/prop-types */
import {Todo} from './Todo'
import { Toaster, toast } from 'sonner'

// eslint-disable-next-line react/prop-types
export const Todos = ({todos,addTodo,editTodo,deleteTodo,completeTodo,uncompleteTodo}) => {

    const handleClick = () => {

        const newTodo = {
            id: crypto.randomUUID(),
            title: 'new todo',
            completed: false
        }
        addTodo(newTodo)

        toast.success('Todo added!')

    }

    return (
        <div className="todos">
            {todos.map(todo => 
                <div className="todo" key={todo.id}>
                    <Toaster 
                        toastOptions={{
                            style: {
                              background: 'rgb(173, 195, 242)',
                              fontFamily: 'cursive'
                            },
                            className: 'class',
                          }}
                        position="bottom-right" />
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