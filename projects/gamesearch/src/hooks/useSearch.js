import {useState,useRef,useEffect} from 'react'

export function useSearch(){
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