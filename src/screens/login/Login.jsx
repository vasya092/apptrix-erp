import React from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import styles from './Login.module.sass'

const Login = () => {
    
    const access_token = localStorage.getItem('access_token')
    return (
        <div className={styles.loginPage}>
            {!access_token ? <LoginForm/> : 'You are already logged'}
        </div>
    )
}

export default Login