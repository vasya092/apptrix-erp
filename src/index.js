import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import { fetchUsers } from './features/users/usersSlice';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserDetails from './components/users/UserDetails/UserDetails';
import Header from './components/header/Header';
import UsersList from './components/users/UserList/UserList';
import Login from './screens/login/Login';
import Container from '@mui/material/Container'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchTasks } from './features/tasks/tasksSlice';
import Tasks from './screens/tasks/Tasks';
import { fetchProjects } from './features/projects/projectsSlice';

store.dispatch(fetchUsers())
store.dispatch(fetchProjects())
store.dispatch(fetchTasks())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
        <Container maxWidth="xl" className="app">
          <Routes>
              <Route path='/' element={<UsersList/>} />
              <Route path='/users/:userId' element={<UserDetails/>}/>
              <Route path='/tasks' element={<Tasks/>}/>
              <Route path='/login' element={<Login/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
