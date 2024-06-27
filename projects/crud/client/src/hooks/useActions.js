import {useAppDispatch} from './useStore'
import { addUserDB, deleteUserDB, editUserDB, fetchData} from "../store/users/slice"
import { useEffect } from 'react'



export const useActions = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const addUser = ({ name, lastName, username, age, avatar }) => {
        dispatch(addUserDB({ name, lastName, username, age, avatar }))
    }    
    const removeUser = (user) => {
        dispatch(deleteUserDB(user))
    }
    /*
    const rollback = (user) => {
        dispatch(rollbackUser(user))
    }*/
    const edit = (user) => {
        dispatch(editUserDB(user))
    }
    const refresh = () => {
        dispatch(fetchData())
    }

    return {addUser, removeUser, edit, refresh}

}