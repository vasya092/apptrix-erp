import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice"
import projectsReducer from "../features/projects/projectsSlice"
import tasksReducer from "../features/tasks/tasksSlice"
import workItemsReducer from "../features/workItems/workItemsSlice"

export const store = configureStore({
    reducer: {
        users: usersReducer,
        projects: projectsReducer,
        tasks: tasksReducer,
        workItems: workItemsReducer
    }
})