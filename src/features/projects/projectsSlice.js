import {createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import $apiYoutrack from '../../http/youtrackApi'

const projectsAdapter = createEntityAdapter()
const initialState = projectsAdapter.getInitialState()


export const fetchProjects = createAsyncThunk('projects/  ', async () => {
    const headers = {
        'Accept': 'application/json',
        'Cache-Control':'no-cache'
    }

    const projects = $apiYoutrack.get('/admin/projects?fields=id,name' , {
        headers
    }).then((res) => {
        return res.data
    })

    return projects;
    
})

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchProjects.fulfilled, projectsAdapter.setAll)
    }
})

export default projectsSlice.reducer
export const {selectAll: selectAllProjects} = projectsAdapter.getSelectors(state => state.projects)