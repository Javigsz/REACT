import './App.css'
import {UsersList} from './components/UsersList'
import {NewUser} from './components/NewUser'
import {Toaster} from 'sonner'

function App() {

  return (
    <>
      <h1>CRUD</h1>
      <h3>with React, React-Redux, Bootstrap and Flask</h3>
      <Toaster richColors />
      <UsersList/>
      <NewUser/>
    </>
  )
}

export default App
