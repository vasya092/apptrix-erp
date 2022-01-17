import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import $apiYoutrack from '../../http/youtrackApi'

const initialState = []


export const fetchWorkItems = createAsyncThunk('workItems/  ', async () => {
    const headers = {
        'Accept': 'application/json',
        'Cache-Control':'no-cache'
    }

    const workItems = $apiYoutrack.get('/workItems?fields=id,author(name),duration(presentation),issue(id)' , {
        headers
    }).then((res) => {
        return res.data
    })

    return workItems;
    
})

const workItemsSlice = createSlice({
    name: 'workItems',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchWorkItems.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default workItemsSlice.reducer

export const selectWorkItemByTask = (state, taskId) => state.workItems.filter((workItem) => {
  return (workItem.issue.id === taskId)
})