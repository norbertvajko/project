import "./navbar.css";
import {Link} from "react-router-dom";
import {APP_ROUTES} from "../../routes";
import {Drawer} from "@mui/joy";
import {useState} from "react";
import {Avatar, Box, Divider, List, ListItem, ListItemButton} from "@mui/material";

interface NavBarProps {
    user: any;
}

export const NavBar = (props: NavBarProps) => {
    const {user} = props;

    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    }

    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            <nav className={"navbar"}>
            <span className={"logo"}>
                <Link className={"link"} to={APP_ROUTES.HOME}>LOGO</Link>
            </span>
                {user ? (
                    <Avatar
                        src={user.photos[0].value}
                        alt={""} className={"avatar"}
                        onClick={handleDrawerOpen}
                        sx={{cursor: "pointer"}}
                    />
                ) : (
                    <Box style={{gap: "10px", display: "flex"}}>
                        <Link to={APP_ROUTES.LOGIN} className={"link"}>
                            Sign in
                        </Link>
                        <Link to={APP_ROUTES.LOGIN} className={"link"} style={{fontWeight: "bold"}}>
                            Sign up
                        </Link>
                    </Box>
                )}
            </nav>

            <Drawer
                anchor={"right"}
                open={isDrawerOpen}
                onClose={handleDrawerClose}
                size={"sm"}
                color={"neutral"}
                variant={"solid"}
                sx={{
                    borderRadius: "8px",
                }}
            >
                <Box role="presentation">
                    <Box style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: "20px",
                        paddingLeft: "20px",
                        gap: "5px"
                    }}>
                        {user ? <Box style={{display: "flex", alignItems: "center", gap: "15px"}}>
                            <Avatar src={user.photos[0].value ?? null}/>
                            {user.displayName}
                        </Box> : null}
                    </Box>
                    <Divider style={{paddingTop: "20px"}} />
                    <List>
                        {['Your profile',].map((text) => (
                            <ListItem key={text}>
                                <ListItemButton>{text}</ListItemButton>
                            </ListItem>
                        ))}
                        <Divider />
                        <ListItem>
                            <ListItemButton onClick={logout}>Sign out</ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}