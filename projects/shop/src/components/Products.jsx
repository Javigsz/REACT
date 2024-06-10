import { products } from '../mocks/products.json'
import { MdAddShoppingCart } from 'react-icons/md'
import { useFilter } from '../hooks/useFilter'

export function Products() {

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
          <button><MdAddShoppingCart /></button>
        </div>
      )}
    </main>
    </>
    )
}