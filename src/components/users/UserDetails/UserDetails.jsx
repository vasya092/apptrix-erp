import { Container, List, ListItemText } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserById } from "../../../features/users/usersSlice";

const UserDetails = () => {
    let params = useParams();
    const user = useSelector(state => selectUserById(state, params.userId))
    return (
        <Container maxWidth="xl">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItemText primary="ID" secondary={user.id} />
                <ListItemText primary="Name" secondary={user.name} />
                <ListItemText primary="Login" secondary={user.login} />
                <ListItemText primary="Email" secondary={user.email} />
                <ListItemText primary="Type" secondary={user.$type} />
            </List>
        </Container>
    )
}

export default UserDetails