import { TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from './LoginForm.module.sass'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import $api from '../../http/apptrixApi';



const LoginForm = () => {

    const navigate = useNavigate()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setFormError] = useState(false)

    const notify = () => toast.success("Login success");
    
    const handleLogin = async () => {
            const data = {
                username: login,
                password: password
            }

            const response = await $api.post('/token/', data).then((res) => {
                console.log(res.data);
                localStorage.setItem('access_token', res.data.access); 
                localStorage.setItem('refresh_token', res.data.refresh);
                setLogin('')
                setPassword('')
                setFormError(false)
                notify()
                navigate('/') 
            }).catch(e => {
                console.log('error '+ e);
                setFormError(true)
            })
            return response
    }
    const onLoginChange = (e) => setLogin(e.target.value)
    const onPasswordChange = (e) => setPassword(e.target.value)


    return (
        <div className={styles.loginForm}>
            <TextField 
                id="outlined-basic"
                label="Login" 
                variant="outlined" 
                margin="dense"
                error={formError}
                onChange={onLoginChange}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                error={formError}
                onChange={onPasswordChange}
            />  
            {formError ? <span className={styles.errorText}>Invalid login or password</span> : ''}
            <Button variant="contained" margin="normal" size="large" onClick={handleLogin}>Login</Button>
        </div>
    )
}

export default LoginForm