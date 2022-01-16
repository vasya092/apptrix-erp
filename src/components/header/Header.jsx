import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import styles from './Header.module.sass'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Header = () => {
    const access_token = localStorage.getItem('access_token')

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        toast.success("Logout success");
        navigate('/')
    }

    return (
    <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar className={styles.toolBar}>
            <div className={styles.menuList} >
                <Link className={styles.menuLink} to="/">
                    Home
                </Link>
                {!access_token ?
                <Link className={styles.menuLink} to="/login">
                    Login
                </Link> : <span onClick={logout}>Logout</span>
                }
            </div>


        </Toolbar>
        </Container>
    </AppBar>
    );
};
export default Header;
