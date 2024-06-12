import { products } from '../mocks/products.json'
import { MdAddShoppingCart } from 'react-icons/md'
import { useFilter } from '../hooks/useFilter'
import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { MdRemoveShoppingCart } from "react-icons/md"
import { CART_ACTION_TYPES } from '../context/reducers/cartReducer'

export function Products() {

  const {cart, dispatch} = useContext(CartContext)
  const {filterProducts} = useFilter()
  const filteredProducts = filterProducts(products)

    return (
    <>
    <main>
      {filteredProducts.map(product => 
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name}></img>
          <h5>{product.title}</h5>
          <p>Price: {product.price}€</p>
          {cart.find(cartProduct => product.id == cartProduct.id) === undefined
            ? <button onClick={()=> dispatch({type:CART_ACTION_TYPES.ADD_TO_CART, payload:product.id})}>
              <MdAddShoppingCart /></button>
            : <button onClick={()=> dispatch({type:CART_ACTION_TYPES.REMOVE_FROM_CART, payload:product.id})}>
              <MdRemoveShoppingCart /></button>
          }
        </div>
      )}
    </main>
    </>
    )
}