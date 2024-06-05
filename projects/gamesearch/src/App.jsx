import './App.css'
import {useState} from 'react'
import {Games} from './components/Games'
import {useGames} from './hooks/useGames'
import {useSearch} from './hooks/useSearch'

function App() {

  const [sort, setSort] = useState(false)
  const {searchTerm,setSearchTerm,error,setError} = useSearch()
  const {games, getGames, nextGames, previousGames} = useGames({searchTerm,sort})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchTerm) {
      getGames({searchTerm})
    } else {
      setError("Write something to search")
    }
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearchTerm(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const goNext = () => {
    nextGames()
  }

  const goPrevious = () => {
    previousGames()
  }

  return (
    <div className='page'>

    <header className='header'>
      <h1>Videogames search</h1>
      <form className='form' value={searchTerm} onSubmit={handleSubmit}>
        <input type="text" id="search" value={searchTerm} onChange={handleChange} placeholder="Need for Speed, Rayman..."></input>
        <input title="Mark for ordered search" type='checkbox' onChange={handleSort} checked={sort} />
        <button id="search-button">Search</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </header>

    <main>
      <Games games={games}></Games>
    </main>

    <div className="buttons">
      {games.previous && <button onClick={goPrevious}>Previous</button>}
      {games.next && <button onClick={goNext}>Next</button>}
    </div>

    </div>
  )
}

export default App
