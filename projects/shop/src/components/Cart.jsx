import {products} from '../mocks/products.json'
import { SiShopify } from "react-icons/si";

export function Cart() {

    const cartProducts = products.slice(0,3)

    return (
    <>
        <label className="cart-button" htmlFor='cart-input'>
            <SiShopify size={35} />
        </label>
        <input className="input-cart" type="checkbox" id="cart-input" hidden />

    <div className="cart">
        <div className="cart-list">
            {cartProducts.map(product => 
                <div key={product.id} className="cart-item">
                    <img src={product.image} alt={product.title}/>
                    <span>{product.title}</span>
                    <span>{product.price}€</span>
                    <div>
                        <span>Cantidad: </span>
                        <button>+</button>
                        <button>-</button>
                    </div>
                    <div className="linea"></div>
                </div>
            )}
        </div>
        <button className="clear-button">Clear</button>
    </div>
    </>
    )
}