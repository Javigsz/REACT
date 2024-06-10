import { useContext } from "react"
import { FiltersContext } from '../context/filters'

export function useFilter() {

    const { filters } = useContext(FiltersContext)

    const filterProducts = (products) => {

        return products.filter(product => {
        return (product.price >= filters.minPrice &&
            (filters.category == 'all' || 
            product.category.includes(filters.category)
            )
        )
        })
  
  }

  return {filterProducts}
}