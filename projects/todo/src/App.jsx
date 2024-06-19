import './App.css'
import { Todos } from './components/Todos'
import { useTodos } from './hooks/useTodos'


function App() {

  const {todos, addTodo, editTodo, deleteTodo, completeTodo, uncompleteTodo} = useTodos()

  return (
    <>
    <div className="App">
      <h1><b>Todo List 📜</b></h1>
      <Todos 
        todos={todos} 
        addTodo={addTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        uncompleteTodo={uncompleteTodo}
      />
    </div>
    </>
  )
}

export default App
