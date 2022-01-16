import {createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import $apiYoutrack from '../../http/youtrackApi'

const usersAdapter = createEntityAdapter()
const initialState = usersAdapter.getInitialState()


export const fetchUsers = createAsyncThunk('users/  ', async () => {
    const headers = {
        'Accept': 'application/json',
        'Cache-Control':'no-cache'
    }

    const users = $apiYoutrack.get('/users?fields=id,login,name,email' , {
        headers
    }).then((res) => {
        return res.data
    })

    return users;

    
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
    }
})

export default userSlice.reducer
export const {selectAll: selectAllUsers, selectById: selectUserById} = usersAdapter.getSelectors(state => state.users)