import './App.css'
import {useState,useEffect,useRef} from 'react'
import {Games} from './components/Games'

const API_KEY='9a114498e2cb4a519384a7983d00ec4e'

function useGames({ searchTerm,sort }){
  const [games,setGames]=useState([])
  const isLastSearch = useRef(false)

    const getGames = () => {

      if(isLastSearch.current === searchTerm){
        return
      }

      isLastSearch.current = searchTerm

      let order = ''
      if(sort) {
        order = '&ordering=released'
      }

      if(searchTerm){
        fetch(`https://api.rawg.io/api/games?search=${searchTerm}${order}&search_exact=true&page_size=40&key=${API_KEY}`)
          .then(response => response.json())
            .then(json =>
              setGames(json),
            )
      }

    }

    const nextGames = () => {

      if(games.next){
      fetch(games.next)
          .then(response => response.json())
            .then(json =>
              setGames(json),
            )

          }
    }

    const previousGames = () => {

      if(games.previous){
        fetch(games.previous)
            .then(response => response.json())
              .then(json =>
                setGames(json),
              )
  
            }

    }

  return { games, getGames, nextGames, previousGames }

}

function useSearch(){
  const [searchTerm, setSearchTerm] = useState('')
  const [error,setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {

    if(isFirstInput.current){
      isFirstInput.current = false
      return
    }

    if(searchTerm === ''){
      setError('Write something to search')
      return
    }

    if(searchTerm.length < 3){
      setError('At least 3 characters are needed for searching')
      return
    }

    setError(null)

  },[searchTerm])

  return {searchTerm,setSearchTerm,error,setError}
}

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
