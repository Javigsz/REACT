import './App.css'
import { Products } from './components/Products'
import { Header } from './components/Header'
import {Cart} from './components/Cart'
import { FiltersProvider } from './context/filters'
import { CartProvider } from './context/cart'

function App() {

  return (
    <>
    <CartProvider>
    <FiltersProvider>
      <Header />
      <Cart />
      <Products/>
    </FiltersProvider>
    </CartProvider>
    </>
  )
}

export default App
