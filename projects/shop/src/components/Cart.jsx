//import {products} from '../mocks/products.json'
import { SiShopify } from "react-icons/si"
import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { products } from '../mocks/products.json'

export function Cart() {

    //const cartProducts = products.slice(0,3)
    const {cart, dispatch} = useContext(CartContext)

    console.log(cart)

    return (
    <>
    <label className="cart-button" htmlFor='cart-input'>
        <SiShopify size={35} />
    </label>
    <input className="input-cart" type="checkbox" id="cart-input" hidden />

    <div className="cart">
        <div className="cart-list">
            {cart.map(product => 
                <div key={product.id} className="cart-item">
                    <img src={products.find(prod => prod.id == product.id).image} alt={product.title}/>
                    <span>{products.find(prod => prod.id == product.id).title}</span>
                    <span>{products.find(prod => prod.id == product.id).price}€</span>
                    <div>
                        <span>Cantidad: {product.quantity}</span>
                        <button onClick={()=> dispatch({type:'ADD_TO_CART', payload:product.id})}>+</button>
                        <button onClick={()=> dispatch({type:'REMOVE_FROM_CART', payload:product.id})}>x</button>
                    </div>
                    <div className="linea"></div>
                </div>
            )}
        </div>
        <button className="clear-button" onClick={()=> dispatch({type:'CLEAR_CART'})}>Clear</button>
    </div>
    </>
    )
}