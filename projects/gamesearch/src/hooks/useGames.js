import {useState,useRef} from 'react'

const API_KEY='9a114498e2cb4a519384a7983d00ec4e'

export function useGames({ searchTerm,sort }){
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