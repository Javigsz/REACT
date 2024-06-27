import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { toast } from 'sonner'
//import users from '../../mocks/users'

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('http://localhost:5000/users');
    const data = await response.json()
    
    return data
})

export const addUserDB = createAsyncThunk('users/addUser', async (userData) => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    const data = await response.json()
    return data
})

export const deleteUserDB = createAsyncThunk('users/deleteUser', async (user) => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    return data
})

export const editUserDB = createAsyncThunk('users/editUser', async (user) => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    return data
})

const initialState = {
    data: null,
    status: 'idle',
    error: null,
}

export const usersSlice = createSlice({

    name: 'users',
    initialState,
    reducers: {
        /* if data is stored in client side, we can add it here 
        addNewUser: (state, action) => {
            const id = crypto.randomUUID()
            state.data.push({id, ...action.payload})
        },
        deleteUserById: (state, action) => {
            const id = action.payload
            return state.data.filter(user => user.id !== id)
        },
        rollbackUser: (state, action) => {
            const isUserAlreadyDefined = state.data.some(user => user.id === action.payload.id)
            if (!isUserAlreadyDefined) {
                state.data.push(action.payload)
            }
        },
        editUser: (state, action) => {
            const index = state.data.findIndex(user => user.id === action.payload.id)
            state.data[index] = action.payload
        }*/
    },
    extraReducers: (builder) => {
        builder
            //fetchData
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload.users
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            //addUserDB
            .addCase(addUserDB.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addUserDB.fulfilled, (state,action) => {
                if (action.payload.error) {
                    state.status = 'failed'
                    state.error = action.payload.error
                    toast.error(action.payload.error)
                }
                else {
                    state.status = 'succeeded'
                    state.data = action.payload.users
                    toast.success('User added successfully')
                }
            })
            .addCase(addUserDB.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
            //deleteUserDB
            .addCase(deleteUserDB.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteUserDB.fulfilled, (state,action) => {
                state.status = 'succeeded'
                state.data = action.payload.users
                toast.success('User deleted successfully')
            })
            .addCase(deleteUserDB.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
            //editUserDB
            .addCase(editUserDB.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(editUserDB.fulfilled, (state,action) => {
                state.status = 'succeeded'
                state.data = action.payload.users
                toast.success('User edited successfully')
            })
            .addCase(editUserDB.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message;
            })
    }
})

export default usersSlice.reducer

export const { addNewUser, deleteUserById, rollbackUser, editUser } = usersSlice.actions