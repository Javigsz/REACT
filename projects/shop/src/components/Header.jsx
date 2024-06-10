import { FaShoppingCart } from "react-icons/fa"
import { useContext } from 'react'
import { FiltersContext } from "../context/filters"

export function Header() {

    const { filters, setFilters } = useContext(FiltersContext)

    const handleInputChange = (e) => {
        setFilters(prevState => 
            ({ ...prevState, 
            minPrice: e.target.value 
            })
        )
    }

    const handleSelectChange = (e) => {
        setFilters(prevState => 
            ({...prevState,
            category: e.target.value
            })
        )
    }

    return (
        <>
        <h1>
            React Shop 
            <FaShoppingCart size={30} color="black" />
        </h1>
        <div className="filters">
        <div className="filter1">
            <label htmlFor="price">Minimum price:</label>
            <input
            type='range'
            id='price'
            min='0'
            max='1000'
            value={filters.minPrice}
            onChange={handleInputChange}
            /><span>{filters.minPrice} €</span>
        </div>
        <div className="filter2">
            <label htmlFor="category">Category</label>
            <select id="category" onChange={handleSelectChange}>
                <option value='all'>All</option>
                <option value='clothing'>Clothing</option>
                <option value='jewelery'>Jewelery</option>
                <option value='electronics'>Electronics</option>
            </select>
        </div>
        </div>
      </>
    )
}