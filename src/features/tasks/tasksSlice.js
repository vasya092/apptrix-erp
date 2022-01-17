import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import $apiYoutrack from '../../http/youtrackApi'

const initialState = []


export const fetchTasks = createAsyncThunk('tasks/  ', async () => {
    const headers = {
        'Accept': 'application/json',
        'Cache-Control':'no-cache'
    }

    const tasks = $apiYoutrack.get('/issues?fields=id,summary,project(id,name)' , {
        headers
    }).then((res) => {
        return res.data
    })

    return tasks;
    
})

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default tasksSlice.reducer
export const selectAllTasks = (state) => state.tasks
export const selectTasksByProject = (state, projectId) => state.tasks.filter((task) => {
        return (task.project.id === projectId)
})
export const selectTasksByProjectName = (tasks, findStr) => tasks.filter((task) => {
        const lowerCase = task.project.name.toLowerCase()
        if(lowerCase.indexOf(findStr.toLowerCase()) !== -1)
        {
            return task
        }
        else return false
})