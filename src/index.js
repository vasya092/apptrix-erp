import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import Login from './screens/login/Login';
import Container from '@mui/material/Container'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
        <Container maxWidth="xl" className="app">
          <Routes>
              <Route path='/' />
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
