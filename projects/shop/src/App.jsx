import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import {Cart} from './components/Cart'
import { FiltersProvider } from './context/filters'

function App() {

  return (
    <>
    <FiltersProvider>
      <Header />
      <Cart />
      <Products/>
      </FiltersProvider>
    </>
  )
}

export default App
