import { useReducer } from 'react'
import { todos } from '../mocks/todo'

const initialState = todos

const TODO_ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  UNCOMPLETE_TODO: 'UNCOMPLETE_TODO'
}

const reducer = (state, action) => {

  switch (action.type) {

    case TODO_ACTION_TYPES.ADD_TODO:
      return [...state, action.payload]

    case TODO_ACTION_TYPES.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload)

    case TODO_ACTION_TYPES.EDIT_TODO:
      return state.map(todo => todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo)

    case TODO_ACTION_TYPES.COMPLETE_TODO:
      return state.map(todo => todo.id === action.payload ? { ...todo, completed: true } : todo)

    case TODO_ACTION_TYPES.UNCOMPLETE_TODO:
      return state.map(todo => todo.id === action.payload ? { ...todo, completed: false } : todo)
      
    default:
      return state
  }
}

export const useTodos = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return {
        todos: state,
        addTodo: (todo) => dispatch({ type: TODO_ACTION_TYPES.ADD_TODO, payload: todo }),
        deleteTodo: (id) => dispatch({ type: TODO_ACTION_TYPES.DELETE_TODO, payload: id }),
        editTodo: (todo) => dispatch({ type: TODO_ACTION_TYPES.EDIT_TODO, payload: todo }),
        completeTodo: (id) => dispatch({ type: TODO_ACTION_TYPES.COMPLETE_TODO, payload: id }),
        uncompleteTodo: (id) => dispatch({ type: TODO_ACTION_TYPES.UNCOMPLETE_TODO, payload: id })
    }
    
}