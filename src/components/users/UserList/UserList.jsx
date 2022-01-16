import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../../features/users/usersSlice";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './UserList.module.sass'
import { useNavigate } from "react-router-dom";

const UsersList = () => {

    const navigate = useNavigate()

    const users = useSelector(selectAllUsers)
    const renderedUsers = users.map((user) => (
        <TableRow onClick={() => navigate(`/users/${user.id}`)} className={styles.userTable__row} key={user.id} hover={true}>
            <TableCell>{user.id}</TableCell>
            <TableCell >{user.name}</TableCell>
            <TableCell >{user.login}</TableCell>
            <TableCell>{user.email}</TableCell>
        </TableRow>
    ))

    return (
        <TableContainer className={styles.userList} component={Paper} sx={{ maxWidth: 950 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Login</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderedUsers}
                </TableBody>
            </Table>
            
        </TableContainer>
    )
}

export default UsersList